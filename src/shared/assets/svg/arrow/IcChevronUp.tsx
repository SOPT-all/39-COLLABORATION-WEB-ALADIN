import type { SVGProps } from 'react';
const SvgIcChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path stroke="#1B1B1B" strokeLinejoin="round" d="m2 14 8.023-8L18 14" />
  </svg>
);
export default SvgIcChevronUp;
