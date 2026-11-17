import bannerImage from '@assets/images/top-banner-ad/thumbnail-01.webp';
import IcPause from '@assets/svg/banner/IcPause';

const TopBannerAd = () => {
  return (
    <section
      aria-label="상단 광고 배너"
      className="relative h-[128px] w-[343px]"
    >
      <img
        src={bannerImage}
        alt="토스 퀵계좌이체 0.3% 즉시 할인, 매 주문마다 적용 가능"
        width={343}
        height={128}
        className="h-full w-full rounded-8 object-cover"
      />
      <div className="absolute right-8 bottom-8 flex items-center gap-4">
        <span aria-hidden="true" className="size-[24px] rounded-full">
          <IcPause />
        </span>
        <div className="flex h-[24px] w-[56px] items-center gap-4 rounded-full bg-dim-30 px-8 py-2 text-caption-12r text-white">
          <span aria-label="전체 17개 중 4번째 배너" className="shrink-0">
            4/17
          </span>
          <svg
            aria-hidden="true"
            width={10}
            height={10}
            viewBox="0 0 10 10"
            fill="none"
            className="shrink-0"
          >
            <path d="M0 5h10M5 0v10" stroke="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TopBannerAd;
