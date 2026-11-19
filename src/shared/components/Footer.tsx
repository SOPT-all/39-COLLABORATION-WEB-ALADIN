import IcChevronDownSmall from '@assets/svg/arrow/IcChevronDownSmall';

const FOOTER_MENUS = [
  { label: '로그인', width: 53 },
  { label: '전체 메뉴', width: 68 },
  { label: '회사 소개', width: 68 },
  { label: '출판사 안내', width: 80 },
  { label: 'PC 버전', width: 63 },
];

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-12 bg-gray-50 pb-48 text-gray-950">
      <ul className="flex w-full items-center gap-2 border-b border-gray-200 pr-[19px] pl-(--layout-margin-x) text-body-14m whitespace-nowrap text-gray-700">
        {FOOTER_MENUS.map((menu) => (
          <li
            key={menu.label}
            className="flex h-[44px] shrink-0 grow items-center justify-center px-8 py-12"
            style={{ width: menu.width }}
          >
            {menu.label}
          </li>
        ))}
      </ul>

      <p className="flex h-[22px] w-[149px] shrink-0 items-center justify-center gap-4 text-body-14sb whitespace-nowrap">
        (주)알라딘커뮤니케이션
        <IcChevronDownSmall aria-hidden="true" />
      </p>

      <p className="flex h-[24px] w-[221px] shrink-0 items-center gap-12 whitespace-nowrap">
        <span className="w-[126px] shrink-0 text-body-14m">
          일반문의 (발신자 부담)
        </span>
        <span className="w-[82px] shrink-0 text-body-16sb">1544-2514</span>
      </p>

      <div className="flex w-full gap-12 px-(--layout-margin-x) text-center text-body-14r">
        <p className="min-w-0 flex-1 rounded-4 bg-white px-16 py-8">1:1 문의</p>
        <p className="min-w-0 flex-1 rounded-4 bg-white px-16 py-8">FAQ</p>
      </div>

      <div className="w-full px-(--layout-margin-x) text-center text-body-14r">
        <p className="rounded-4 bg-white px-16 py-8">
          중고매장 위치, 영업시간 안내
        </p>
      </div>
    </footer>
  );
};

export default Footer;
