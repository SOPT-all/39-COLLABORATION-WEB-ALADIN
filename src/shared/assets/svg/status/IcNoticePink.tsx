import type { SVGProps } from 'react';
const SvgIcNoticePink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle cx={10} cy={10} r={9} stroke="#EB217C" strokeWidth={1.5} />
    <path fill="#EB217C" d="M11 7.65V15H9V7.65zM11 5v1.773H9V5z" />
  </svg>
);
export default SvgIcNoticePink;
