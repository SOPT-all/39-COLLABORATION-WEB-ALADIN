import type { ComponentPropsWithRef, ReactNode } from 'react';

const BUTTON_WIDTH = {
  default: 'w-[2.75rem]',
  narrow: 'w-[2.125rem]',
} as const;

interface HeaderIconButtonProps extends ComponentPropsWithRef<'button'> {
  badgeCount?: number;
  icon: ReactNode;
  label: string;
  size?: keyof typeof BUTTON_WIDTH;
}

const HeaderIconButton = ({
  badgeCount = 0,
  className = '',
  icon,
  label,
  size = 'default',
  type = 'button',
  ...props
}: HeaderIconButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      aria-label={label}
      className={`relative flex h-[3.5rem] ${BUTTON_WIDTH[size]} shrink-0 items-center justify-center active:bg-gray-50 ${className}`}
    >
      {icon}
      {badgeCount > 0 && (
        <span className="absolute top-8 right-4 flex h-16 min-w-16 items-center justify-center rounded-full bg-navy-500 px-2 text-caption-12r text-white">
          {badgeCount > 99 ? '99+' : badgeCount}
        </span>
      )}
    </button>
  );
};

export default HeaderIconButton;
