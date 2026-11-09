import type { SVGProps } from "react";
const SvgIcCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="ic-cart_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M0 0h24v24H0z" />
    </mask>
    <g stroke="#1B1B1B" strokeWidth={1.5} mask="url(#ic-cart_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.198 5.769 4.374 2H2m5.363 13.007L5.198 5.77h15.57c.787 0 1.365.74 1.205 1.52l-1.845 7.717c-.06.281-.212.533-.431.713a1.22 1.22 0 0 1-.773.28H8.567c-.281 0-.554-.1-.773-.28a1.27 1.27 0 0 1-.431-.713"
      />
      <path d="M12 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </g>
  </svg>
);
export default SvgIcCart;
