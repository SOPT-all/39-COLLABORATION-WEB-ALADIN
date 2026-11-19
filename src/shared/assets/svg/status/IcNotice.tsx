import type { SVGProps } from 'react';
const SvgIcNotice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <circle cx={9} cy={9} r={8.1} stroke="#636363" strokeWidth={1.35} />
    <path
      fill="#636363"
      d="M9.9 6.885V13.5H8.1V6.885zm0-2.385v1.596H8.1V4.5z"
    />
  </svg>
);
export default SvgIcNotice;
