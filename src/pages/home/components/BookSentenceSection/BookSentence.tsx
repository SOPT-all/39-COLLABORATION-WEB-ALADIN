import IcChevronLeft from '@assets/svg/arrow/IcChevronLeft';
import IcChevronRight from '@assets/svg/arrow/IcChevronRight';
import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';
import IcQuotationMark from '@assets/svg/quotation/IcQuotationMark';

interface BookSentenceProps {
  sentence: string;
  title: string;
  imageSrc: string;
}

const BookSentence = ({ sentence, title, imageSrc }: BookSentenceProps) => {
  return (
    <div className="flex w-full flex-col gap-16 px-16 text-gray-950">
      <div className="flex flex-col items-center gap-24">
        <IcQuotationMark aria-hidden="true" width={40} height={28} />
        <blockquote className="m-0 w-full text-center text-body-16m">
          <p className="line-clamp-5 wrap-break-word">{sentence}</p>
        </blockquote>
      </div>
      <div className="relative flex h-[112px] items-center justify-center">
        <IcChevronLeft
          aria-hidden="true"
          className="absolute left-0 shrink-0"
        />
        <div className="flex items-center gap-16">
          <img
            src={imageSrc}
            alt={`${title} 표지`}
            width={72}
            height={112}
            className="h-[112px] w-[72px] shrink-0 object-contain"
          />
          <div className="flex w-[141px] flex-col items-start gap-16">
            <h3 className="line-clamp-2 text-body-16sb wrap-break-word">
              {title}
            </h3>
            <span className="inline-flex h-[28px] w-[95px] items-center justify-center gap-8 rounded-full border border-gray-200 bg-white text-label-12sb whitespace-nowrap">
              <span className="w-[55px] shrink-0">자세히 보기</span>
              <span
                aria-hidden="true"
                className="flex h-[18px] w-[6px] shrink-0 items-center justify-center"
              >
                <IcChevronRightSmall className="max-w-none shrink-0" />
              </span>
            </span>
          </div>
        </div>
        <IcChevronRight
          aria-hidden="true"
          className="absolute right-0 shrink-0"
        />
      </div>
    </div>
  );
};

export default BookSentence;
