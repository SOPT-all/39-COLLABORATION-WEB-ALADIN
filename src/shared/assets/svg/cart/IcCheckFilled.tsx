import type { SVGProps } from 'react';
const SvgIcCheckFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="#EB217C" d="M0 0h20v20H0z" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 10.396 7.727 14 16 6"
    />
  </svg>
);
export default SvgIcCheckFilled;
