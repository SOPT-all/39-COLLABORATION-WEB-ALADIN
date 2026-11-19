import type { SVGProps } from 'react';
const SvgIcBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.496 22h2.998m-7.506-8.444V9.333C5.988 5.84 8.677 3 11.996 3c3.317 0 6.006 2.84 6.006 6.333v4.223a3.6 3.6 0 0 0 .32 1.486c.212.464.518.872.898 1.194l.31.265c.919.78.4 2.343-.78 2.343H5.25c-1.18 0-1.7-1.562-.78-2.343l.31-.264c.38-.322.687-.73.898-1.194s.32-.972.32-1.487z"
    />
  </svg>
);
export default SvgIcBell;
