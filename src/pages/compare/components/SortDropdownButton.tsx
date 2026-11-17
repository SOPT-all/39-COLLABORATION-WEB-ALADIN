import type { ComponentPropsWithRef } from 'react';

import IcChevronDownSmall from '@assets/svg/arrow/IcChevronDownSmall';

interface SortDropdownButtonProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children'
> {
  label: string;
}

const SortDropdownButton = ({
  className = '',
  label,
  type = 'button',
  ...props
}: SortDropdownButtonProps) => (
  <button
    {...props}
    type={type}
    aria-haspopup="dialog"
    className={`inline-flex items-center gap-4 text-body-14m text-gray-700 [&_path]:stroke-current ${className}`}
  >
    {label}
    <IcChevronDownSmall aria-hidden="true" className="shrink-0" />
  </button>
);

export default SortDropdownButton;
