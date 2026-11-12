import type { ButtonHTMLAttributes } from 'react';

interface BtnTabbarProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  /** 탭 이름 옆에 표시하는 선택적 보조 문구입니다. 전달하지 않으면 렌더링하지 않습니다. */
  countLabel?: string;
  isSelected?: boolean;
  label: string;
}

const BtnTabbar = ({
  className = '',
  countLabel,
  isSelected = false,
  label,
  type = 'button',
  ...props
}: BtnTabbarProps) => {
  const selectedClass = isSelected
    ? "after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-[100px] after:-translate-x-1/2 after:bg-pink-500 after:content-['']"
    : '';
  const labelClass = isSelected ? 'text-pink-500' : 'text-gray-500';
  const countClass = isSelected ? 'text-pink-300' : 'text-gray-500';

  return (
    <button
      aria-selected={isSelected}
      className={`relative flex h-[var(--spacing-48)] shrink-0 items-center justify-center gap-4 overflow-hidden bg-white active:bg-gray-50 ${selectedClass} ${className}`}
      role="tab"
      type={type}
      {...props}
    >
      <span className={`text-body-16sb ${labelClass}`}>{label}</span>
      {countLabel && (
        <span className={`text-body-16r ${countClass}`}>{countLabel}</span>
      )}
    </button>
  );
};

export default BtnTabbar;
