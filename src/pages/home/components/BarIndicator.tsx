const BarIndicator = () => {
  return (
    <div aria-hidden="true" className="relative h-[6px] w-[265px]">
      <div className="absolute inset-x-0 top-px h-[4px] rounded-full bg-gray-100" />
      <div className="absolute top-0 left-0 h-[6px] w-[24px] rounded-full bg-navy-500" />
    </div>
  );
};

export default BarIndicator;
