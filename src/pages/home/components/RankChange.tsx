interface RankChangeProps {
  change: 'same' | 'hot';
}

const RankChange = ({ change }: RankChangeProps) => {
  return (
    <span className="inline-flex h-[24px] w-[21px] shrink-0 items-center justify-center">
      {change === 'hot' ? (
        <span className="text-body-14r text-pink-500">hot</span>
      ) : (
        <span
          role="img"
          aria-label="순위 변동 없음"
          className="w-[15px] border-t border-gray-700"
        />
      )}
    </span>
  );
};

export default RankChange;
