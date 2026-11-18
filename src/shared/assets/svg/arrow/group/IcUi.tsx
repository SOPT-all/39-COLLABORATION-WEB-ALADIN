import type { SVGProps } from 'react';
const SvgIcUi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={26}
    fill="none"
    viewBox="0 0 22 26"
    {...props}
  >
    <mask id="ic-ui_svg__a" fill="#fff">
      <path d="M22 0v26H0V0z" />
    </mask>
    <path fill="#fff" d="M22 0v26H0V0z" />
    <path fill="#DDD" d="M0 26h1V0h-2v26z" mask="url(#ic-ui_svg__a)" />
    <path fill="#999" d="M10.985 16 6 10h1.994l2.995 3.604L14.001 10H16z" />
  </svg>
);
export default SvgIcUi;
