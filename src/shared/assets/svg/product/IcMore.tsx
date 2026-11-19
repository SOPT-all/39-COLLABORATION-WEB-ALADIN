import type { SVGProps } from 'react';
const SvgIcMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="ic-more_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#ic-more_svg__a)">
      <path
        fill="#636363"
        d="M22 20q-.824 0-1.413-.587A1.93 1.93 0 0 1 20 18q0-.824.587-1.413A1.93 1.93 0 0 1 22 16q.824 0 1.413.587Q24 17.176 24 18q0 .824-.587 1.413A1.93 1.93 0 0 1 22 20m0-6q-.824 0-1.413-.588A1.93 1.93 0 0 1 20 12q0-.825.587-1.412A1.93 1.93 0 0 1 22 10q.824 0 1.413.588Q24 11.175 24 12t-.587 1.412A1.93 1.93 0 0 1 22 14m0-6q-.824 0-1.413-.588A1.93 1.93 0 0 1 20 6q0-.824.587-1.412A1.93 1.93 0 0 1 22 4q.824 0 1.413.588Q24 5.175 24 6q0 .824-.587 1.412A1.93 1.93 0 0 1 22 8"
      />
    </g>
  </svg>
);
export default SvgIcMore;
