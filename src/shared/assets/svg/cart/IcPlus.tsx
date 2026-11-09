import type { SVGProps } from "react";
const SvgIcPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path stroke="#1B1B1B" strokeLinejoin="round" d="M8 14h12M14 8v12" />
  </svg>
);
export default SvgIcPlus;
