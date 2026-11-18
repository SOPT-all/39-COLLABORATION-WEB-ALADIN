interface BookCardProps {
  imageSrc?: string;
  title: string;
  author: string;
  hasShadow?: boolean;
}

const BookCard = ({
  imageSrc,
  title,
  author,
  hasShadow = false,
}: BookCardProps) => {
  return (
    <article className="flex w-[130px] shrink-0 flex-col gap-16">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${title} 표지`}
          width={130}
          height={184}
          className={`h-[184px] w-full object-cover object-top ${hasShadow ? 'shadow-card' : ''}`}
        />
      ) : (
        <div
          role="img"
          aria-label={`${title} 표지 없음`}
          className="flex h-[184px] w-full items-center justify-center bg-gray-50 text-caption-12r text-gray-700"
        >
          표지 없음
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-title-18m wrap-break-word text-gray-950">
          {title}
        </h3>
        <p className="text-caption-12r wrap-break-word text-gray-700">
          {author}
        </p>
      </div>
    </article>
  );
};

export default BookCard;
