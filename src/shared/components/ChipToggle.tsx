import IcCheckBlue from '@assets/svg/cart/IcCheckBlue';

const stateClasses = {
  selected: 'bg-sky text-white',
  unselected: 'bg-gray-50 text-gray-500',
};

interface ChipToggleProps {
  label: string;
  onClick: () => void;
  selected: boolean;
}

const ChipToggle = ({ label, onClick, selected }: ChipToggleProps) => {
  const state = selected ? 'selected' : 'unselected';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`inline-flex items-center justify-center gap-4 rounded-full px-12 py-4 text-label-12sb ${stateClasses[state]}`}
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
