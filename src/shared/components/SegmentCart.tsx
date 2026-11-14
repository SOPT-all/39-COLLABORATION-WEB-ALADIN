const SEGMENT_OPTIONS = [
  { label: '택배 배송', value: 'delivery' },
  { label: '반값택배', value: 'halfPrice' },
] as const;

type SegmentValue = (typeof SEGMENT_OPTIONS)[number]['value'];

interface SegmentCartProps {
  className?: string;
  deliveryCount: number;
  halfPriceCount: number;
  onValueChange: (value: SegmentValue) => void;
  selectedValue: SegmentValue;
}

const SegmentCart = ({
  className = '',
  deliveryCount,
  halfPriceCount,
  onValueChange,
  selectedValue,
}: SegmentCartProps) => {
  const counts: Record<SegmentValue, number> = {
    delivery: deliveryCount,
    halfPrice: halfPriceCount,
  };

  return (
    <div
      aria-label="배송 방식"
      className={`flex h-[44px] w-full items-center gap-[3px] rounded-8 bg-pink-50 p-4 ${className}`}
      role="tablist"
    >
      {SEGMENT_OPTIONS.map(({ label, value }) => {
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
            onClick={() => onValueChange(value)}
          >
            <span className={labelClass}>{label}</span>
            <span className="text-body-14r">{counts[value]}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SegmentCart;
