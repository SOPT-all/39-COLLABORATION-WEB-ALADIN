import type { SVGProps } from 'react';
const SvgIcCheckOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="#fff" d="M.25.25h19.5v19.5H.25z" />
    <path stroke="#C2C2C2" strokeWidth={0.5} d="M.25.25h19.5v19.5H.25z" />
    <path
      stroke="#EB217C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 10.396 7.727 14 16 6"
    />
  </svg>
);
export default SvgIcCheckOutline;
