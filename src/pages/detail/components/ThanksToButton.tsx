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
    className={`inline-flex h-32 items-center justify-center gap-4 rounded-4 bg-navy-50 px-8 text-body-14sb text-navy-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-400 enabled:active:bg-navy-100 ${className}`}
    type={type}
  >
    Thanks to
  </button>
);

export default ThanksToButton;
