import type { SVGProps } from "react";
const SvgIcChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1 .75 8 9.026-8 8.974"
    />
  </svg>
);
export default SvgIcChevronRight;
