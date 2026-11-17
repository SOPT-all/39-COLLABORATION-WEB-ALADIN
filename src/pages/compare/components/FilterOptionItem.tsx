import IcCheckPink from '@assets/svg/cart/IcCheckPink';

interface FilterOptionItemProps {
  isSelected: boolean;
  label: string;
}

const FilterOptionItem = ({ isSelected, label }: FilterOptionItemProps) => (
  <li className="border-b border-gray-200">
    <div className="flex h-[48px] items-center justify-between py-12 pr-12 pl-16">
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
    </div>
  </li>
);

export default FilterOptionItem;
