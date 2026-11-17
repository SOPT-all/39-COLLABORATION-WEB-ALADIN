import type { ComponentProps } from 'react';

import RankChange from './RankChange';

interface BookRankItemProps {
  imageSrc: string;
  rank?: number;
  title: string;
  change: ComponentProps<typeof RankChange>['change'];
}

const BookRankItem = ({ imageSrc, rank, title, change }: BookRankItemProps) => {
  return (
    <article className="relative flex h-[68px] w-full items-center gap-16 px-24 pt-4 text-gray-950 after:absolute after:inset-x-0 after:bottom-0 after:border-b after:border-gray-200">
      <img
        src={imageSrc}
        alt={`${title} 표지`}
        width={44}
        height={64}
        className="h-[64px] w-[44px] shrink-0 object-cover object-top"
      />
      <p className="min-w-0 flex-1 truncate text-body-16m" title={title}>
        {rank !== undefined && (
          <span className="mr-4 text-body-16sb">{rank}.</span>
        )}
        {title}
      </p>
      <RankChange change={change} />
    </article>
  );
};

export default BookRankItem;
