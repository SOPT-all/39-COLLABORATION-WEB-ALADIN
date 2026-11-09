import type { SVGProps } from "react";
const SvgIcChevronDownSmall = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1 4 5 4 5-4"
    />
  </svg>
);
export default SvgIcChevronDownSmall;
