import type { SVGProps } from "react";
const SvgIcHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#1B1B1B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.194 21v-4.764a2.58 2.58 0 0 1 .826-1.873 2.9 2.9 0 0 1 1.985-.774c.745 0 1.459.278 1.986.774a2.58 2.58 0 0 1 .825 1.873V21H21v-9.094c0-.56-.236-1.1-.664-1.493L12.794 3.31a1.16 1.16 0 0 0-.793-.31c-.297 0-.583.112-.793.31l-7.544 7.103c-.21.195-.377.427-.49.684a2 2 0 0 0-.174.81V21z"
    />
  </svg>
);
export default SvgIcHome;
