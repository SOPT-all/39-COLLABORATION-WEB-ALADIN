import IcCabinetOutline from '@assets/svg/product/IcCabinetOutline';

interface CartKeepButtonProps {
  disabled?: boolean;
}

const CartKeepButton = ({ disabled = false }: CartKeepButtonProps) => {
  const backgroundClass = disabled
    ? 'bg-gray-50'
    : 'bg-white active:bg-gray-50';

  return (
    <button
      className={`flex h-[30px] items-center justify-center gap-1 rounded-sm pr-2 pl-1 text-body-14m text-gray-700 inset-ring inset-ring-gray-200 disabled:cursor-default ${backgroundClass}`}
      disabled={disabled}
      type="button"
    >
      <IcCabinetOutline aria-hidden="true" />
      <span>보관</span>
    </button>
  );
};

export default CartKeepButton;
