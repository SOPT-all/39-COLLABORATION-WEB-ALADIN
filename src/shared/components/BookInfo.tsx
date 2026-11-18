interface BookInfoProps {
  author: string;
  publishedAt: string;
  publisher: string;
  subtitle?: string;
  title: string;
}

const BookInfo = ({
  author,
  publishedAt,
  publisher,
  subtitle,
  title,
}: BookInfoProps) => (
  <div className="flex flex-col gap-8">
    <div className="flex flex-col">
      <h1 className="text-title-20sb text-gray-950">{title}</h1>
      {subtitle && <p className="text-body-16r text-gray-950">{subtitle}</p>}
    </div>
    <p className="flex items-center gap-4 text-body-14m text-gray-700">
      <span>{author}</span>
      <span aria-hidden="true">·</span>
      <span>{publisher}</span>
      <span aria-hidden="true">·</span>
      <span className="text-body-14r">{publishedAt}</span>
    </p>
  </div>
);

export default BookInfo;
