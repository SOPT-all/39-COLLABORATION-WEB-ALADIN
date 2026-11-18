const VARIANT_CLASSES = {
  detail: 'bg-light-blue text-bluegray',
  summary: 'bg-pink-100 text-pink-500',
};

interface BookConditionChipProps {
  label: string;
  variant?: 'detail' | 'summary';
}

const BookConditionChip = ({
  label,
  variant = 'detail',
}: BookConditionChipProps) => (
  <span
    className={`inline-flex items-center rounded-full px-8 py-4 text-label-12sb whitespace-nowrap ${VARIANT_CLASSES[variant]}`}
  >
    {label}
  </span>
);

export default BookConditionChip;
