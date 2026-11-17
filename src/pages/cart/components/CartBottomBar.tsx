import Button from '@components/Button';

interface CartBottomBarProps {
  selectedBookCount: number;
  selectedTypeCount: number;
  totalPrice: number;
}

const CartBottomBar = ({
  selectedBookCount,
  selectedTypeCount,
  totalPrice,
}: CartBottomBarProps) => {
  return (
    <aside
      aria-label="선택 상품 주문"
      className="fixed bottom-0 left-1/2 z-10 flex w-[375px] -translate-x-1/2 flex-col gap-12 overflow-hidden rounded-t-8 bg-white px-(--layout-margin-x) pt-12 pb-16 shadow-bar"
    >
      <div className="flex items-start justify-between text-body-14r text-gray-700">
        <span>선택 상품</span>

        <p className="flex items-start gap-4">
          <span>
            총 {selectedTypeCount}종 {selectedBookCount}개
          </span>
          <span aria-hidden="true">·</span>
          <strong className="text-body-14sb text-gray-950">
            {totalPrice.toLocaleString('ko-KR')}원
          </strong>
        </p>
      </div>

      <Button className="w-full" size="large">
        주문하기
      </Button>
    </aside>
  );
};

export default CartBottomBar;
