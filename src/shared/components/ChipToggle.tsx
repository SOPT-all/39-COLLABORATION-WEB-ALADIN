import IcCheckBlue from '@assets/svg/cart/IcCheckBlue';

const STATE_CLASSES = {
  selected: 'bg-sky text-white',
  unselected: 'bg-gray-50 text-gray-500',
};

interface ChipToggleProps {
  isSelected: boolean;
  label: string;
  onClick: () => void;
}

const ChipToggle = ({ isSelected, label, onClick }: ChipToggleProps) => {
  const state = isSelected ? 'selected' : 'unselected';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={`inline-flex items-center justify-center gap-4 rounded-full px-12 py-4 text-label-12sb ${STATE_CLASSES[state]}`}
    >
      {isSelected && (
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
