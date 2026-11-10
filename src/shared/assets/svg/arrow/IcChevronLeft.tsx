import type { SVGProps } from 'react';
const SvgIcChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={20}
    fill="none"
    viewBox="0 0 10 20"
    {...props}
  >
    <path
      stroke="#1B1B1B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 .75 1 9.776l8 8.974"
    />
  </svg>
);
export default SvgIcChevronLeft;
