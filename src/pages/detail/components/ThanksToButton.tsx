import type { MouseEventHandler } from 'react';

interface ThanksToButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ThanksToButton = ({
  className = '',
  disabled,
  onClick,
}: ThanksToButtonProps) => (
  <button
    className={`inline-flex h-[29px] items-center rounded-4 bg-navy-50 px-8 py-4 text-label-12sb whitespace-nowrap text-navy-300 enabled:active:bg-navy-100 ${className}`}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    Thanks to
  </button>
);

export default ThanksToButton;
