import type { SVGProps } from "react";
const SvgIcNewBooks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <mask id="ic-new-books_svg__a" fill="#fff">
      <path d="M4 3.995h20a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4z" />
    </mask>
    <path
      stroke="#1B1B1B"
      strokeWidth={2}
      d="M4 3.995h20a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4z"
      mask="url(#ic-new-books_svg__a)"
    />
    <path
      fill="#3E4899"
      d="M17.686 13.005h1.057l1 4.417h.05l1.061-4.417h.978l1.065 4.421h.046l.996-4.421h1.062l-1.549 6h-.985l-1.1-4.222h-.045l-1.103 4.222h-.981zM13.547 13.005h3.58v.907h-2.591v1.641h2.404v.9h-2.404v1.644h2.606v.908h-3.595zM12.523 19.005h-.879L9.04 14.907h-.05v4.098H8v-6h.89l2.598 4.102h.05v-4.102h.985z"
    />
    <path stroke="#1B1B1B" d="M9.5 3.995v6M9.5 22.005v6" />
  </svg>
);
export default SvgIcNewBooks;
