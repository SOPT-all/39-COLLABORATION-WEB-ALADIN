import IcCheckFilled from '@assets/svg/cart/IcCheckFilled';
import IcCheckOutline from '@assets/svg/cart/IcCheckOutline';

interface CartSelectionToolbarProps {
  isAllSelected: boolean;
  onMoveToKeep: () => void;
  onRemoveSelected: () => void;
  onSelectAll: () => void;
  selectedCount: number;
  totalCount: number;
}

const CartSelectionToolbar = ({
  isAllSelected,
  onMoveToKeep,
  onRemoveSelected,
  onSelectAll,
  selectedCount,
  totalCount,
}: CartSelectionToolbarProps) => {
  return (
    <div className="-mx-12 flex w-[375px] items-center justify-between bg-white px-16">
      <button
        type="button"
        aria-pressed={isAllSelected}
        className="flex items-center gap-8"
        onClick={onSelectAll}
      >
        {isAllSelected ? (
          <IcCheckFilled aria-hidden="true" />
        ) : (
          <IcCheckOutline aria-hidden="true" />
        )}
        <span className="text-body-16sb text-gray-950">전체 선택</span>
        <span className="text-body-14r text-gray-700">
          {selectedCount}/{totalCount}
        </span>
      </button>

      <div className="flex items-center gap-12 text-body-14m text-gray-700">
        <button type="button" onClick={onRemoveSelected}>
          선택 삭제
        </button>
        <button type="button" onClick={onMoveToKeep}>
          보관함으로
        </button>
      </div>
    </div>
  );
};

export default CartSelectionToolbar;
