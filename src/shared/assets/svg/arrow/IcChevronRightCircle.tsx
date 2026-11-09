import type { SVGProps } from "react";
const SvgIcChevronRightCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path stroke="#C2C2C2" d="M10 .5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19Z" />
    <path
      stroke="#1B1B1B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 15 4-5-4-5"
    />
  </svg>
);
export default SvgIcChevronRightCircle;
