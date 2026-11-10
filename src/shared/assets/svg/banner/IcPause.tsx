import type { SVGProps } from 'react';
const SvgIcPause = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ic-pause_svg__a)">
      <path
        fill="#000"
        fillOpacity={0.3}
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path fill="#ECECEC" d="M13.22 8H14v8h-.78zM10 8h.78v8H10z" />
    </g>
    <defs>
      <clipPath id="ic-pause_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcPause;
