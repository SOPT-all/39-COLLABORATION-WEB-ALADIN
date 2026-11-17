import { useState } from 'react';

type SegmentValue = 'delivery' | 'halfPrice';

interface SegmentCartProps {
  deliveryCount: number;
  halfPriceCount: number;
}

const SegmentCart = ({ deliveryCount, halfPriceCount }: SegmentCartProps) => {
  const [selectedValue, setSelectedValue] = useState<SegmentValue>('delivery');
  const segmentOptions = [
    { count: deliveryCount, label: '택배 배송', value: 'delivery' },
    { count: halfPriceCount, label: '반값택배', value: 'halfPrice' },
  ] as const;

  return (
    <div
      aria-label="배송 방식"
      className="flex h-[44px] items-center gap-[3px] rounded-8 bg-pink-50 p-4"
      role="tablist"
    >
      {segmentOptions.map(({ count, label, value }) => {
        const isSelected = selectedValue === value;
        const selectedClass = isSelected
          ? 'bg-pink-500 text-white'
          : 'text-pink-300';
        const labelClass = isSelected ? 'text-body-14sb' : 'text-body-14m';

        return (
          <button
            key={value}
            aria-selected={isSelected}
            className={`flex h-[36px] min-w-0 flex-1 items-center justify-center gap-2 rounded-4 px-8 ${selectedClass}`}
            role="tab"
            type="button"
            onClick={() => setSelectedValue(value)}
          >
            <span className={labelClass}>{label}</span>
            <span className="text-body-14r">{count}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SegmentCart;
