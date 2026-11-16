interface NowIssueCardProps {
  coverSrc: string;
  title: string;
  badge: string;
  description: string;
}

const NowIssueCard = ({
  coverSrc,
  title,
  badge,
  description,
}: NowIssueCardProps) => {
  return (
    <article className="flex h-[192px] w-[343px] shrink-0 items-start gap-16 rounded-8 bg-gray-50 p-16">
      <img
        src={coverSrc}
        alt={`${title} 책 표지`}
        width={112}
        height={160}
        className="h-[160px] w-[112px] shrink-0 object-cover"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-12 text-gray-950">
        <div className="flex flex-col gap-4">
          <span className="inline-flex h-[22px] w-[71px] shrink-0 items-center justify-center rounded-full bg-white text-label-12sb whitespace-nowrap text-navy-500 ring-1 ring-gray-200 ring-inset">
            {badge}
          </span>
          <h3 className="text-title-20sb break-all">{title}</h3>
        </div>
        <p className="text-body-14m break-all whitespace-pre-line">
          {description}
        </p>
      </div>
    </article>
  );
};

export default NowIssueCard;
