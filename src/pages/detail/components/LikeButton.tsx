import type { ComponentPropsWithRef } from 'react';

import IcLike from '@assets/svg/product/IcLike';
import IcLikeFilled from '@assets/svg/product/IcLikeFilled';

interface LikeButtonProps extends ComponentPropsWithRef<'button'> {
  children?: never;
  isLiked: boolean;
}

const LikeButton = ({
  className = '',
  isLiked,
  type = 'button',
  ...props
}: LikeButtonProps) => (
  <button
    {...props}
    aria-pressed={isLiked}
    className={`inline-flex w-[61px] items-center justify-center gap-4 rounded-4 bg-navy-50 px-8 py-4 text-label-12sb whitespace-nowrap text-navy-300 ${className}`}
    type={type}
  >
    <span
      aria-hidden="true"
      className="grid size-5 shrink-0 place-items-center"
    >
      {isLiked ? (
        <IcLikeFilled />
      ) : (
        <IcLike className="size-full [&_g_path]:fill-current" />
      )}
    </span>
    공감
  </button>
);

export default LikeButton;
