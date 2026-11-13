import IcSearch from '@assets/svg/header/IcSearch';

interface SearchFieldProps {
  className?: string;
  keyword: string;
}

const SearchField = ({ className = '', keyword }: SearchFieldProps) => {
  return (
    <div
      className={`flex h-40 min-w-0 items-center gap-8 rounded-full bg-gray-50 pl-16 ${className}`}
    >
      <p className="min-w-0 flex-1 truncate text-body-14r text-gray-700">
        {keyword}
      </p>
      <span
        aria-hidden="true"
        className="flex size-40 shrink-0 items-center pl-2"
      >
        <IcSearch />
      </span>
    </div>
  );
};

export default SearchField;
