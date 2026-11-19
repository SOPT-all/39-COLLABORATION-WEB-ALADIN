import type { SVGProps } from 'react';
const SvgIcPrevious = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="ic-previous_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill="#fff" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#ic-previous_svg__a)">
      <path
        stroke="#1B1B1B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 3-9 9 9 9"
      />
    </g>
  </svg>
);
export default SvgIcPrevious;
