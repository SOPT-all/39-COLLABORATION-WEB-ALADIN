import type { ButtonHTMLAttributes } from 'react';

interface BtnTabbarProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  isSelected?: boolean;
  label: string;
}

const BtnTabbar = ({
  className = '',
  isSelected = false,
  label,
  type = 'button',
  ...props
}: BtnTabbarProps) => {
  const stateClass = isSelected
    ? "text-body-16sb text-pink-500 after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-[100px] after:-translate-x-1/2 after:bg-pink-500 after:content-['']"
    : 'text-body-16m text-gray-500';

  return (
    <button
      aria-selected={isSelected}
      className={`relative flex h-[var(--spacing-48)] shrink-0 items-center justify-center overflow-hidden bg-white active:bg-gray-50 ${stateClass} ${className}`}
      role="tab"
      type={type}
      {...props}
    >
      {label}
    </button>
  );
};

export default BtnTabbar;
export type { BtnTabbarProps };
