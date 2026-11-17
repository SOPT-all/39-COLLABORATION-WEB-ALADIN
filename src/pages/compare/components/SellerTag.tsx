import type { SellerGrade } from '../types/usedBook';

import { SELLER_GRADE_LABEL } from '../constants/usedBookLabels';

const GRADE_CLASSES: Record<SellerGrade, string> = {
  professional: 'bg-seller-professional-50 text-seller-professional',
  gold: 'bg-seller-gold-50 text-seller-gold',
};

interface SellerTagProps {
  grade: SellerGrade;
}

const SellerTag = ({ grade }: SellerTagProps) => (
  <span
    className={`inline-flex items-center rounded-full px-8 py-4 text-label-12sb whitespace-nowrap ${GRADE_CLASSES[grade]}`}
  >
    {SELLER_GRADE_LABEL[grade]}
  </span>
);

export default SellerTag;
