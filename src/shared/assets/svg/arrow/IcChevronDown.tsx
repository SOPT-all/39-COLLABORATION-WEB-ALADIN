import type { SVGProps } from "react";
const SvgIcChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path stroke="#1B1B1B" strokeLinejoin="round" d="m18 6-8.023 8L2 6" />
  </svg>
);
export default SvgIcChevronDown;
