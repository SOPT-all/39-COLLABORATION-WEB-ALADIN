import IcCheckFilled from '@assets/svg/cart/IcCheckFilled';
import IcCheckOutline from '@assets/svg/cart/IcCheckOutline';

interface CartSelectionToolbarProps {
  isAllSelected: boolean;
  selectedCount: number;
  totalCount: number;
}

const CartSelectionToolbar = ({
  isAllSelected,
  selectedCount,
  totalCount,
}: CartSelectionToolbarProps) => {
  return (
    <div className="flex w-full items-center justify-between bg-white px-16">
      <div className="flex items-center gap-8">
        {isAllSelected ? (
          <IcCheckFilled aria-hidden="true" />
        ) : (
          <IcCheckOutline aria-hidden="true" />
        )}
        <span className="text-body-16sb text-gray-950">전체 선택</span>
        <span className="text-body-14r text-gray-700">
          {selectedCount}/{totalCount}
        </span>
      </div>

      <div className="flex items-center gap-12 text-body-14m text-gray-700">
        <span>선택 삭제</span>
        <span>보관함으로</span>
      </div>
    </div>
  );
};

export default CartSelectionToolbar;
