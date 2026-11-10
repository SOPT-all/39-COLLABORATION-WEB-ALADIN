import type { SVGProps } from 'react';
const SvgIcChevronLast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={28}
    fill="none"
    viewBox="0 0 43 28"
    {...props}
  >
    <path
      stroke="#C2C2C2"
      d="M4 .5h35A3.5 3.5 0 0 1 42.5 4v20a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 24V4A3.5 3.5 0 0 1 4 .5Z"
    />
    <path
      stroke="#999"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.5 19 4-5-4-5M24.5 19l4-5-4-5"
    />
  </svg>
);
export default SvgIcChevronLast;
