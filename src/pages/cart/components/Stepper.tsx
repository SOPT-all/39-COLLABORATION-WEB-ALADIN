import IcMinus from '@assets/svg/cart/IcMinus';
import IcPlus from '@assets/svg/cart/IcPlus';

interface StepperProps {
  label: string;
}

const Stepper = ({ label }: StepperProps) => {
  return (
    <div
      aria-label={`${label} 수량 조절`}
      className="inline-flex overflow-hidden rounded-sm inset-ring inset-ring-gray-200"
      role="group"
    >
      <button
        aria-label={`${label} 수량 줄이기`}
        className="flex size-7 items-center justify-center bg-gray-50 text-gray-500 inset-ring inset-ring-gray-200 disabled:cursor-default [&_path]:stroke-current"
        disabled
        type="button"
      >
        <IcMinus aria-hidden="true" />
      </button>

      <output
        aria-label={`${label} 현재 수량`}
        className="flex size-7 items-center justify-center bg-gray-50 text-body-16r text-gray-500 inset-ring inset-ring-gray-200"
      >
        1
      </output>

      <button
        aria-label={`${label} 수량 늘리기`}
        className="flex size-7 items-center justify-center bg-gray-50 text-gray-500 inset-ring inset-ring-gray-200 disabled:cursor-default [&_path]:stroke-current"
        disabled
        type="button"
      >
        <IcPlus aria-hidden="true" />
      </button>
    </div>
  );
};

export default Stepper;
