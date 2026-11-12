import BtnTabbar from '@components/BtnTabbar';

interface TabBarItem {
  label: string;
  value: string;
}

interface TabBarProps {
  className?: string;
  /** 모든 탭에 동일하게 표시할 보조 문구입니다. 판매처 탭에서는 '99+'를 전달하고, 숫자가 없는 탭에서는 생략합니다. */
  countLabel?: string;
  items: readonly TabBarItem[];
  onValueChange: (value: string) => void;
  selectedValue: string;
}

const TabBar = ({
  className = '',
  countLabel,
  items,
  onValueChange,
  selectedValue,
}: TabBarProps) => {
  return (
    <div
      className={`flex w-full items-center border-b border-gray-200 bg-white ${className}`}
      role="tablist"
    >
      {items.map(({ label, value }) => (
        <BtnTabbar
          key={value}
          className="min-w-0 flex-1"
          countLabel={countLabel}
          isSelected={selectedValue === value}
          label={label}
          onClick={() => onValueChange(value)}
        />
      ))}
    </div>
  );
};

export default TabBar;
