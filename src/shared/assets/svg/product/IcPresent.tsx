import type { SVGProps } from "react";
const SvgIcPresent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#636363"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M1.722 6h16.556c.399 0 .722.323.722.722v2.555a.72.72 0 0 1-.722.723H1.722A.72.72 0 0 1 1 9.277V6.722C1 6.323 1.323 6 1.722 6M10 19V6"
    />
    <path
      stroke="#636363"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.883 6c-1.55.006-3.046-.49-4.19-1.388C5.248 4.208 5 3.672 5 3.116c0-.557.248-1.092.694-1.496a2.3 2.3 0 0 1 .763-.459c.288-.106.598-.161.911-.161s.624.055.912.161.548.263.763.459C10.46 2.884 9.884 6 9.884 6"
    />
    <path
      stroke="#636363"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10.117 6c1.55.006 3.046-.49 4.19-1.388.445-.404.693-.94.693-1.496 0-.557-.248-1.092-.694-1.496a2.3 2.3 0 0 0-.763-.459A2.6 2.6 0 0 0 12.632 1c-.314 0-.624.055-.912.161a2.3 2.3 0 0 0-.763.459C9.54 2.884 10.116 6 10.116 6M17 10v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8"
    />
  </svg>
);
export default SvgIcPresent;
