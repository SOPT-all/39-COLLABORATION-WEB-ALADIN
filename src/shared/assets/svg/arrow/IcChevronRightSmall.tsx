import type { SVGProps } from 'react';
const SvgIcChevronRightSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      stroke="#1B1B1B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4 11 4-5-4-5"
    />
  </svg>
);
export default SvgIcChevronRightSmall;
