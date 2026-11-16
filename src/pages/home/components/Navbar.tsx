import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'HOME', width: 41 },
  { label: '중고도서', width: 49 },
  { label: '추천마법사', width: 61 },
  { label: '국내도서', width: 49 },
  { label: '전자책', width: 37 },
  { label: '우주점', width: 37 },
  { label: '만권당', width: 37 },
] as const;

const Navbar = () => {
  const [isAtEnd, setIsAtEnd] = useState(false);

  return (
    <div className="relative bg-white px-(--layout-margin-x) shadow-[inset_0_-1px_0_var(--color-gray-200)]">
      <div
        aria-label="홈 카테고리 메뉴, 좌우로 스크롤할 수 있습니다"
        className="h-40 w-full [scrollbar-width:none] overflow-x-auto [&::-webkit-scrollbar]:hidden"
        role="region"
        tabIndex={0}
        onScroll={({ currentTarget }) => {
          const { scrollLeft, clientWidth, scrollWidth } = currentTarget;
          setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
        }}
      >
        <ul className="flex h-full w-max gap-12">
          {NAV_ITEMS.map(({ label, width }, index) => (
            <li
              key={label}
              aria-current={index === 0 ? 'page' : undefined}
              className={`flex h-full shrink-0 items-center whitespace-nowrap ${
                index === 0 ? 'text-body-14sb' : 'text-body-14m'
              } ${label === '중고도서' ? 'text-pink-500' : 'text-gray-950'}`}
              style={{ width }}
            >
              {index === 0 ? (
                <button
                  type="button"
                  aria-current="page"
                  className="flex h-full w-full items-center shadow-[inset_0_-2px_0_var(--color-gray-950)] active:bg-gray-50"
                >
                  {label}
                </button>
              ) : (
                label
              )}
            </li>
          ))}
        </ul>
      </div>
      {!isAtEnd && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 h-40 w-[46px] bg-linear-to-r from-white/0 to-white"
        />
      )}
    </div>
  );
};

export default Navbar;
