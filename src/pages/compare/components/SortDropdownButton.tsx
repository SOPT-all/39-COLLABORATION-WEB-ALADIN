import IcChevronDownSmall from '@assets/svg/arrow/IcChevronDownSmall';

interface SortDropdownButtonProps {
  label: string;
  onClick?: () => void;
}

const SortDropdownButton = ({ label, onClick }: SortDropdownButtonProps) => (
  <button
    type="button"
    aria-haspopup="dialog"
    className="inline-flex items-center gap-4 text-body-14r text-gray-700 [&_path]:stroke-current"
    onClick={onClick}
  >
    {label}
    <IcChevronDownSmall aria-hidden="true" className="shrink-0" />
  </button>
);

export default SortDropdownButton;
