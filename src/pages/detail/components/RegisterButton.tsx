import IcBell from '@assets/svg/header/IcBell';

interface RegisterButtonProps {
  variant?: 'review' | 'alert';
}

const RegisterButton = ({ variant = 'review' }: RegisterButtonProps) => {
  const isAlert = variant === 'alert';
  const typographyClass = isAlert ? 'text-body-14m' : 'text-body-14sb';

  return (
    <button
      type="button"
      className={`flex w-full items-center justify-center gap-4 rounded-4 bg-navy-300 px-8 py-12 text-center text-white enabled:active:bg-navy-400 ${typographyClass}`}
    >
      {isAlert && (
        <IcBell
          aria-hidden="true"
          className="shrink-0 [&_path]:stroke-current"
          height={16}
          width={16}
        />
      )}
      {isAlert ? '중고 등록 알림 신청' : '등록'}
    </button>
  );
};

export default RegisterButton;
