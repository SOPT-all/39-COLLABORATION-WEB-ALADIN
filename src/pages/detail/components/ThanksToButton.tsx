import type { ComponentPropsWithRef } from 'react';

interface ThanksToButtonProps extends ComponentPropsWithRef<'button'> {
  children?: never;
}

const ThanksToButton = ({
  className = '',
  type = 'button',
  ...props
}: ThanksToButtonProps) => (
  <button
    {...props}
    className={`inline-flex h-[29px] items-center rounded-4 bg-navy-50 px-8 py-4 text-label-12sb whitespace-nowrap text-navy-300 enabled:active:bg-navy-100 ${className}`}
    type={type}
  >
    Thanks to
  </button>
);

export default ThanksToButton;
