import type { ComponentPropsWithRef } from 'react';

import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';

const surfaceClasses = {
  tinted: 'bg-navy-50 px-8 py-4 enabled:active:bg-navy-100',
  none: 'enabled:active:text-navy-600 enabled:active:[&_path]:stroke-navy-700',
};

interface ChipLinkProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children'
> {
  label: string;
  surface?: keyof typeof surfaceClasses;
}

const ChipLink = ({
  className = '',
  label,
  surface = 'tinted',
  type = 'button',
  ...props
}: ChipLinkProps) => {
  return (
    <button
      {...props}
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-label-12sb text-navy-400 [&_path]:stroke-current ${surfaceClasses[surface]} ${className}`}
    >
      {label}
      <IcChevronRightSmall aria-hidden="true" className="shrink-0" />
    </button>
  );
};

export default ChipLink;
