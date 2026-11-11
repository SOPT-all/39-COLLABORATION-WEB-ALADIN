import type { ComponentPropsWithRef } from 'react';

import IcChevronRightSmall from '@assets/svg/arrow/IcChevronRightSmall';

interface ChipLinkProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children'
> {
  label: string;
}

const ChipLink = ({
  className = '',
  label,
  type = 'button',
  ...props
}: ChipLinkProps) => {
  return (
    <button
      {...props}
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-navy-50 px-8 py-4 text-label-12sb text-navy-400 [&_path]:stroke-current ${className}`}
    >
      {label}
      <IcChevronRightSmall aria-hidden="true" className="shrink-0" />
    </button>
  );
};

export default ChipLink;
