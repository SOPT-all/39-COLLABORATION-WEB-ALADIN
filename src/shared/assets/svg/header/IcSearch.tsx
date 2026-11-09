import type { SVGProps } from "react";
const SvgIcSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="ic-search_svg__a"
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
    <g mask="url(#ic-search_svg__a)">
      <path
        stroke="#1B1B1B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.252 16.252a7.177 7.177 0 1 1-10.15-10.15 7.177 7.177 0 0 1 10.15 10.15m0 0L20 20m-3.748-3.748-.012-.012"
      />
    </g>
  </svg>
);
export default SvgIcSearch;
