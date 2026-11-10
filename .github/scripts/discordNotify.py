import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any


GREEN = 0x2ECC71
ORANGE = 0xE67E22
PURPLE = 0x9B59B6
YELLOW = 0xF1C40F
TEAM_NAMES = {
    "yumin-kim2": "김유민",
    "kimxeesoo": "김희수",
    "hycho04": "조현영",
    "yebeenchoi": "최예빈",
}


def getRequiredEnvironmentVariable(name: str) -> str:
    value = os.environ.get(name, "").strip()
    if not value:
        raise ValueError(f"필수 환경 변수 {name}이(가) 비어 있습니다.")
    return value


def loadEvent() -> dict[str, Any]:
    eventPath = Path(getRequiredEnvironmentVariable("GITHUB_EVENT_PATH"))
    with eventPath.open(encoding="utf-8") as eventFile:
        return json.load(eventFile)


def loadDiscordUserMap() -> dict[str, str]:
    rawUserMap = os.environ.get("DISCORD_USER_MAP", "").strip()
    if not rawUserMap:
        print("::warning::DISCORD_USER_MAP이 없어 사용자 멘션을 생략합니다.")
        return {}

    parsedUserMap = json.loads(rawUserMap)
    if not isinstance(parsedUserMap, dict):
        raise ValueError("DISCORD_USER_MAP은 JSON 객체여야 합니다.")

    userMap: dict[str, str] = {}
    for githubId, discordId in parsedUserMap.items():
        normalizedDiscordId = str(discordId)
        if not isinstance(githubId, str) or not normalizedDiscordId.isdigit():
            raise ValueError("GitHub ID와 Discord ID 매핑을 확인해 주세요.")
        userMap[githubId.lower()] = normalizedDiscordId
    return userMap


def getMention(githubId: str, userMap: dict[str, str]) -> tuple[str, list[str]]:
    discordId = userMap.get(githubId.lower())
    if not discordId:
        return "", []
    return f"<@{discordId}>", [discordId]


def getDisplayName(githubId: str) -> str:
    return TEAM_NAMES.get(githubId.lower(), githubId)


def createDiscordPayload(
    title: str,
    description: str,
    color: int,
    url: str,
    mention: str = "",
    allowedUserIds: list[str] | None = None,
) -> dict[str, Any]:
    return {
        "username": "ALADIN Genie 🧞‍♂️",
        "content": mention,
        "allowed_mentions": {"parse": [], "users": allowedUserIds or []},
        "embeds": [
            {
                "title": title,
                "url": url,
                "description": description[:4_096],
                "color": color,
                "footer": {"text": "ALADIN GitHub"},
            }
        ],
    }


def createReviewRequestPayload(
    event: dict[str, Any], userMap: dict[str, str]
) -> dict[str, Any]:
    pullRequest = event["pull_request"]
    reviewers = json.loads(getRequiredEnvironmentVariable("REVIEWERS_JSON"))
    if not isinstance(reviewers, list):
        raise ValueError("REVIEWERS_JSON은 배열이어야 합니다.")

    discordIds = list(
        dict.fromkeys(
            userMap[reviewer.lower()]
            for reviewer in reviewers
            if isinstance(reviewer, str) and reviewer.lower() in userMap
        )
    )
    mentions = " ".join(f"<@{discordId}>" for discordId in discordIds)

    description = "\n".join(
        [
            "지니가 새로운 PR과 리뷰 요청을 가져왔어요! 🧞‍♂️✨",
            "",
            "시간 되실 때 코드 한 번만 살펴봐 주시면 감사하겠습니다 💛",
            "",
            f"📖 **{pullRequest['title']}** · PR #{pullRequest['number']}",
            f"작성자: {pullRequest['user']['login']}",
        ]
    )
    return createDiscordPayload(
        "💌 새로운 PR과 리뷰 요청이 도착했어요!",
        description,
        YELLOW,
        pullRequest["html_url"],
        mentions,
        discordIds,
    )


def createReviewPayload(
    event: dict[str, Any], userMap: dict[str, str]
) -> dict[str, Any] | None:
    reviewState = event["review"]["state"].lower()
    isDismissed = event.get("action") == "dismissed"
    if not isDismissed and reviewState not in {"approved", "changes_requested"}:
        return None

    pullRequest = event["pull_request"]
    author = pullRequest["user"]["login"]
    reviewer = event["review"]["user"]["login"]
    mention, allowedUserIds = getMention(author, userMap)

    if isDismissed:
        title = "↩️ 리뷰 승인이 취소되었어요!"
        body = [
            "지니가 리뷰 상태 변경 소식을 가져왔어요! 🪄",
            "",
            "승인이 취소되어 다시 한번 확인이 필요해요.",
            "",
            f"📖 PR #{pullRequest['number']} · 리뷰어: {getDisplayName(reviewer)}",
        ]
        color = ORANGE
    elif reviewState == "approved":
        title = "💚 리뷰 승인이 도착했어요!"
        body = [
            "짜잔! 리뷰 승인이 완료되었어요 ✨",
            "",
            "꼼꼼하게 확인해 주신 리뷰어님도 감사합니다!",
            "",
            f"📖 PR #{pullRequest['number']} · 승인자: {getDisplayName(reviewer)}",
        ]
        color = GREEN
    else:
        title = "📝 수정 요청이 도착했어요!"
        body = [
            "지니가 작은 수정 요청을 가져왔어요! 🪄",
            "",
            "남겨주신 의견을 확인하고, 여유 되실 때 반영 부탁드려요 💛",
            "",
            f"📖 PR #{pullRequest['number']} · 리뷰어: {getDisplayName(reviewer)}",
        ]
        color = ORANGE

    return createDiscordPayload(
        title,
        "\n".join(body),
        color,
        pullRequest["html_url"],
        mention,
        allowedUserIds,
    )


def createMergedPayload(event: dict[str, Any]) -> dict[str, Any] | None:
    pullRequest = event["pull_request"]
    if event["action"] != "closed" or not pullRequest.get("merged"):
        return None

    description = "\n".join(
        [
            "소원이 이루어졌어요! ✨",
            "",
            "PR이 무사히 합쳐졌습니다. 모두 수고 많으셨어요 💜",
            "",
            f"📖 PR #{pullRequest['number']} · `{pullRequest['head']['ref']}` → `{pullRequest['base']['ref']}`",
        ]
    )
    return createDiscordPayload(
        "🪄 PR 머지가 완료되었어요!",
        description,
        PURPLE,
        pullRequest["html_url"],
    )


def sendNotification(webhookUrl: str, payload: dict[str, Any]) -> None:
    request = urllib.request.Request(
        webhookUrl,
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "User-Agent": "ALADIN-GitHub-Actions",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=15) as response:
            if response.status not in (200, 204):
                raise RuntimeError(f"Discord 알림 실패 (HTTP {response.status})")
    except urllib.error.HTTPError as error:
        errorMessage = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(
            f"Discord 알림 실패 (HTTP {error.code}): {errorMessage}"
        ) from error


def main() -> int:
    try:
        webhookUrl = os.environ.get("DISCORD_WEBHOOK_URL", "").strip()
        if not webhookUrl:
            print("::warning::DISCORD_WEBHOOK_URL이 없어 알림을 생략합니다.")
            return 0

        userMap = loadDiscordUserMap()
        eventName = getRequiredEnvironmentVariable("DISCORD_EVENT_NAME")

        event = loadEvent()
        if eventName == "review_request":
            payload = createReviewRequestPayload(event, userMap)
        elif eventName == "pull_request_review":
            payload = createReviewPayload(event, userMap)
        elif event.get("action") == "closed":
            payload = createMergedPayload(event)
        else:
            payload = None

        if payload is None:
            print("알림 대상 이벤트가 아니므로 건너뜁니다.")
            return 0

        sendNotification(webhookUrl, payload)
    except (KeyError, OSError, TypeError, ValueError, RuntimeError) as error:
        print(f"::error::{error}", file=sys.stderr)
        return 1

    print("Discord 알림을 전송했습니다.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
