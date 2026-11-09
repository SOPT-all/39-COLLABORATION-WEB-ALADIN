import type { SVGProps } from "react";
const SvgIcReset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#636363"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 12a7 7 0 1 0 2.05-4.95L5 9m4 0H5V5"
    />
  </svg>
);
export default SvgIcReset;
