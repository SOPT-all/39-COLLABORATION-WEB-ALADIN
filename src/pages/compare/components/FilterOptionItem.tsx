import IcCheckPink from '@assets/svg/cart/IcCheckPink';

interface FilterOptionItemProps {
  isSelected: boolean;
  label: string;
  onClick?: () => void;
}

const FilterOptionItem = ({
  isSelected,
  label,
  onClick,
}: FilterOptionItemProps) => (
  <li className="border-b border-gray-200">
    <button
      type="button"
      aria-pressed={isSelected}
      disabled={!onClick}
      className="flex h-[48px] w-full items-center justify-between py-12 pr-12 pl-16 disabled:cursor-default"
      onClick={onClick}
    >
      <span
        className={
          isSelected
            ? 'text-body-14sb text-gray-950'
            : 'text-body-14r text-gray-700'
        }
      >
        {label}
      </span>
      {isSelected && <IcCheckPink aria-hidden="true" />}
    </button>
  </li>
);

export default FilterOptionItem;
