import type { ComponentPropsWithRef } from 'react';

import IcCheckBlue from '@assets/svg/cart/IcCheckBlue';

const stateClasses = {
  selected: 'bg-sky text-white',
  unselected: 'bg-gray-50 text-gray-500',
};

interface ChipToggleProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'aria-pressed' | 'children'
> {
  label: string;
  selected: boolean;
}

const ChipToggle = ({
  className = '',
  label,
  selected,
  type = 'button',
  ...props
}: ChipToggleProps) => {
  const state = selected ? 'selected' : 'unselected';

  return (
    <button
      {...props}
      type={type}
      aria-pressed={selected}
      className={`inline-flex items-center justify-center gap-4 rounded-full px-12 py-4 text-label-12sb ${stateClasses[state]} ${className}`}
    >
      {selected && (
        <IcCheckBlue
          aria-hidden="true"
          className="shrink-0 [&_path]:stroke-current"
        />
      )}
      {label}
    </button>
  );
};

export default ChipToggle;
