import type { SVGProps } from 'react';
const SvgIcUsedBooks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="#1B1B1B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M16 14H8a4 4 0 0 1 0-8h20s-2.5 2.158-2.5 4 2.5 4 2.5 4h-4M16 17H4s2.5 2.158 2.5 4S4 25 4 25h20a4 4 0 0 0 0-8"
    />
    <path
      stroke="#3E4899"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M17.624 10h5v9l-2.5-2-2.5 2z"
    />
  </svg>
);
export default SvgIcUsedBooks;
