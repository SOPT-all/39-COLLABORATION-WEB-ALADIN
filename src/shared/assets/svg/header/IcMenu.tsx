import type { SVGProps } from 'react';
const SvgIcMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#1B1B1B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6h16m0 6.5H4M4 19h16"
    />
  </svg>
);
export default SvgIcMenu;
