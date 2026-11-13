import { useLocation, useNavigate } from 'react-router';

import aladinLogo from '@assets/images/ic-aladin_logo.png';
import IcBell from '@assets/svg/header/IcBell';
import IcCart from '@assets/svg/header/IcCart';
import IcHome from '@assets/svg/header/IcHome';
import IcMenu from '@assets/svg/header/IcMenu';
import IcPrevious from '@assets/svg/header/IcPrevious';
import HeaderIconButton from '@components/HeaderIconButton';
import SearchField from '@components/SearchField';
import { ROUTES } from '@constants/routes';

const CART_BADGE_COUNT = 2;
const SEARCH_KEYWORD = '2026 노벨문학상 앤 카슨';

interface HeaderProps {
  variant?: 'default' | 'home';
}

const Header = ({ variant = 'default' }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.key === 'default') {
      navigate(ROUTES.HOME);
      return;
    }
    navigate(-1);
  };

  if (variant === 'home') {
    return (
      <header className="sticky top-0 z-10 flex h-[3.5rem] items-center justify-between bg-white pr-4 pl-16">
        <img src={aladinLogo} alt="알라딘" className="h-32 w-auto" />
        <div className="flex gap-2">
          <HeaderIconButton icon={<IcBell />} label="알림" />
          <HeaderIconButton icon={<IcCart />} label="장바구니" />
          <HeaderIconButton icon={<IcMenu />} label="메뉴" />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-10 flex h-[3.5rem] items-center bg-white pr-[0.375rem]">
      <div className="flex shrink-0 pr-4">
        <HeaderIconButton
          icon={<IcPrevious />}
          label="뒤로 가기"
          onClick={handleBackClick}
        />
        <HeaderIconButton
          className="-ml-[0.625rem]"
          icon={<IcHome />}
          label="홈"
        />
      </div>

      <SearchField className="flex-1" keyword={SEARCH_KEYWORD} />
      <HeaderIconButton
        badgeCount={CART_BADGE_COUNT}
        icon={<IcCart />}
        label="장바구니"
      />
      <HeaderIconButton icon={<IcMenu />} label="메뉴" />
    </header>
  );
};

export default Header;
