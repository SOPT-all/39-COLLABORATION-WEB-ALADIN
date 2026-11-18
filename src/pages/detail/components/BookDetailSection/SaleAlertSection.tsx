import RegisterButton from '../RegisterButton';
import SellButton from './SellButton';

const SaleAlertSection = () => (
  <section
    aria-labelledby="sale-alert-heading"
    className="flex flex-col gap-8 bg-white px-(--layout-margin-x) py-16"
  >
    <h2 id="sale-alert-heading" className="text-title-20sb">
      판매 · 알림
    </h2>

    <div className="flex flex-col gap-8">
      <RegisterButton variant="alert" />
      <div className="grid grid-cols-[168px_168px] justify-between">
        <SellButton label="알라딘에 팔기" />
        <SellButton label="회원에게 팔기" />
      </div>
    </div>
  </section>
);

export default SaleAlertSection;
