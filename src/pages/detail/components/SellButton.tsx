interface SellButtonProps {
  label: string;
}

const SellButton = ({ label }: SellButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-4 border border-navy-300 bg-white px-8 py-12 text-center text-body-14m text-navy-300 enabled:active:bg-gray-50"
    >
      중고 {label}
    </button>
  );
};

export default SellButton;
