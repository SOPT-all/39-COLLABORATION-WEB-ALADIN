export const MOCK_BOOK_CONDITION = {
  grade: '중',
  groups: [
    {
      title: '헌 상태',
      labels: ['사용감 많음'],
      isSummary: true,
    },
    {
      title: '표지',
      labels: ['전체 변색', '모서리 해짐', '찢어짐', '도서 겉표지 없음'],
    },
    {
      title: '책등 / 책배',
      labels: ['오염', '낙서'],
    },
    {
      title: '내부 / 제본상태',
      labels: ['필기 (5쪽 이하)', '부록 없음', '제본 탈착 없음'],
    },
  ],
} as const;
