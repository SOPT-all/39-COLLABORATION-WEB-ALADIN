import type { ButtonHTMLAttributes } from 'react';

interface BtnTabbarProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  background?: 'gray' | 'white';
  isSelected?: boolean;
  label: string;
}

const BtnTabbar = ({
  background = 'white',
  className = '',
  isSelected = false,
  label,
  type = 'button',
  ...props
}: BtnTabbarProps) => {
  const backgroundClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  const stateClass = isSelected
    ? "text-body-16sb text-pink-500 after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-[100px] after:-translate-x-1/2 after:bg-pink-500 after:content-['']"
    : 'text-body-16m text-gray-500';

  return (
    <button
      aria-selected={isSelected}
      className={`relative flex h-[var(--spacing-48)] w-[93px] shrink-0 items-center justify-center overflow-hidden ${backgroundClass} ${stateClass} ${className}`}
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
