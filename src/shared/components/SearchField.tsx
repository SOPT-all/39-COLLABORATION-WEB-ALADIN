import IcSearch from '@assets/svg/header/IcSearch';

interface SearchFieldProps {
  className?: string;
  keyword: string;
  variant?: 'default' | 'home';
}

const SearchField = ({
  className = '',
  keyword,
  variant = 'default',
}: SearchFieldProps) => {
  const isHome = variant === 'home';

  return (
    <div
      className={`flex h-40 min-w-0 items-center gap-8 rounded-full pl-16 ${isHome ? 'bg-gray-100 pr-16 opacity-50' : 'bg-gray-50'} ${className}`}
    >
      <p
        className={`min-w-0 flex-1 truncate text-gray-700 ${isHome ? 'text-body-14m' : 'text-body-14r'}`}
      >
        {keyword}
      </p>
      <span
        aria-hidden="true"
        className={`flex shrink-0 items-center ${isHome ? 'size-24' : 'size-40 pl-2'}`}
      >
        <IcSearch />
      </span>
    </div>
  );
};

export default SearchField;
