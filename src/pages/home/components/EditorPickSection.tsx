import leftCover from '@assets/images/editor-pick/thumbnail-01.webp';
import centerCover from '@assets/images/editor-pick/thumbnail-02.webp';
import rightCover from '@assets/images/editor-pick/thumbnail-03.webp';
import IcChevronLeft from '@assets/svg/arrow/IcChevronLeft';
import IcChevronRight from '@assets/svg/arrow/IcChevronRight';
import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';

import SectionHeader from './SectionHeader';

const EDITOR_PICK = {
  title: '언젠가 이발관',
  subtitle: '노래에 머무른 순간들',
  description:
    '누군가는 오래전 헤어진 연인을 떠올리고, 누군가는 다시 돌아갈 수 없는 시절을 그리워한다. 음악이 가진 힘은 어쩌면 그런 데 있지 않을까.',
};

const EditorPickSection = () => {
  return (
    <section className="flex w-full flex-col gap-12 bg-white pb-24">
      <SectionHeader title="편집장의 선택" />
      <div className="flex flex-col gap-16">
        <div className="relative flex h-[224px] w-full items-center justify-between px-16">
          <img
            src={leftCover}
            alt="이천이십오년 젊은작가상 수상작품집 표지"
            width={88}
            height={134}
            className="h-[134px] w-[88px] shrink-0 object-contain opacity-60"
          />
          <img
            src={centerCover}
            alt={`${EDITOR_PICK.title} 표지`}
            width={154}
            height={224}
            className="h-[224px] w-[154px] shrink-0 object-contain shadow-card"
          />
          <img
            src={rightCover}
            alt="돈으로 자유를 사라 표지"
            width={88}
            height={124}
            className="h-[124px] w-[88px] shrink-0 object-contain opacity-60"
          />
          <IcChevronLeft
            aria-hidden="true"
            width={10}
            height={18}
            className="absolute top-1/2 left-16 -translate-y-1/2"
          />
          <IcChevronRight
            aria-hidden="true"
            width={10}
            height={18}
            className="absolute top-1/2 right-16 -translate-y-1/2"
          />
        </div>
        <div className="mx-16 flex flex-col items-center gap-8 text-center">
          <div className="flex w-full flex-col gap-2">
            <h3 className="text-title-20sb text-gray-950">
              {EDITOR_PICK.title}
            </h3>
            <p className="text-body-14m text-navy-500">
              {EDITOR_PICK.subtitle}
            </p>
          </div>
          <p className="line-clamp-2 h-[44px] w-[301px] max-w-full text-body-14r text-gray-950">
            {EDITOR_PICK.description}
          </p>
          <span className="flex items-center gap-8 text-caption-12r text-gray-500">
            자세히 보기
            <IcChevronRightSmall
              aria-hidden="true"
              width={12}
              height={12}
              className="shrink-0 [&_path]:stroke-current"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default EditorPickSection;
