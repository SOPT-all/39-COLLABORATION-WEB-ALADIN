import IcMinus from '@assets/svg/cart/IcMinus';
import IcPlus from '@assets/svg/cart/IcPlus';

interface StepperProps {
  label: string;
}

const Stepper = ({ label }: StepperProps) => {
  return (
    <div
      aria-label={`${label} 수량 조절`}
      className="inline-flex h-[30px] w-[90px] overflow-hidden rounded-4 bg-gray-50 text-gray-500 inset-ring inset-ring-gray-200 [&_path]:stroke-current"
      role="group"
    >
      <button
        aria-label={`${label} 수량 줄이기`}
        className="flex size-[30px] items-center justify-center disabled:cursor-default"
        disabled
        type="button"
      >
        <IcMinus aria-hidden="true" />
      </button>

      <output
        aria-label={`${label} 현재 수량`}
        className="flex size-[30px] items-center justify-center border-l border-gray-200 text-body-16r"
      >
        1
      </output>

      <button
        aria-label={`${label} 수량 늘리기`}
        className="flex size-[30px] items-center justify-center border-l border-gray-200 disabled:cursor-default"
        disabled
        type="button"
      >
        <IcPlus aria-hidden="true" />
      </button>
    </div>
  );
};

export default Stepper;
