interface BookCardProps {
  imageSrc: string;
  title: string;
  author: string;
}

const HomeBookCard = ({ imageSrc, title, author }: BookCardProps) => {
  return (
    <article className="flex w-[130px] shrink-0 flex-col gap-16">
      <img
        src={imageSrc}
        alt={`${title} 표지`}
        width={130}
        height={184}
        className="h-[184px] w-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-title-18m break-words text-gray-950">{title}</h3>
        <p className="text-caption-12r break-words text-gray-700">{author}</p>
      </div>
    </article>
  );
};

export default HomeBookCard;
