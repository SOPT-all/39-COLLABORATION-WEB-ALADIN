import type { SVGProps } from "react";
const SvgIcClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#636363"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m2 2 16 16M18 2 2 18"
    />
  </svg>
);
export default SvgIcClose;
