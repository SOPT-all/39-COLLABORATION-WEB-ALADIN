import ChipLink from '@components/ChipLink';
import { formatPrice } from '@utils/formatPrice';

const LABEL_CLASS = 'w-[74px] shrink-0 text-body-16m text-gray-950';

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
  <dl className="flex flex-col gap-8 bg-white px-(--layout-margin-x) py-16">
    <div className="flex items-center gap-16">
      <dt className={LABEL_CLASS}>정가</dt>
      <dd className="flex items-center gap-8 text-body-16m text-gray-700">
        {formatPrice(listPrice)}원
        <ChipLink label="새상품 보기" onClick={onNewBookClick} />
      </dd>
    </div>
    <div className="flex items-center gap-16">
      <dt className={LABEL_CLASS}>판매가</dt>
      <dd className="text-body-16m text-gray-700">
        {formatPrice(salePrice)}원 + 마일리지 {formatPrice(mileage)}점
      </dd>
    </div>
  </dl>
);

export default PriceSummary;
