import ChipLink from '@components/ChipLink';
import { formatPrice } from '@utils/formatPrice';

const LABEL_CLASS = 'w-[76px] shrink-0 text-body-14m text-gray-950';

interface PriceSummaryProps {
  listPrice: number;
  mileage: number;
  onNewBookClick?: () => void;
  salePrice: number;
}

const PriceSummary = ({
  listPrice,
  mileage,
  onNewBookClick,
  salePrice,
}: PriceSummaryProps) => (
  <section className="flex flex-col gap-8 bg-white px-(--layout-margin-x) py-16">
    <div className="flex items-center gap-12">
      <span className={LABEL_CLASS}>정가</span>
      <span className="flex items-center gap-8 text-body-14r text-gray-700">
        {formatPrice(listPrice)}원
        <ChipLink label="새상품 보기" onClick={onNewBookClick} />
      </span>
    </div>
    <div className="flex items-center gap-12">
      <span className={LABEL_CLASS}>판매가</span>
      <span className="text-body-14r text-gray-700">
        {formatPrice(salePrice)}원 + 마일리지 {formatPrice(mileage)}점
      </span>
    </div>
  </section>
);

export default PriceSummary;
