import type { SVGProps } from "react";

export function ToothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.31 10.1a2 2 0 0 1 2.37-2.37 2.12 2.12 0 0 1 2.37 2.37L12 18l-2.69-7.9Z" />
      <path d="M9.31 10.1a9.06 9.06 0 0 0 -4.31 5.4 2 2 0 0 0 1.76 2.76 9.06 9.06 0 0 0 5.4-4.31" />
      <path d="M14.69 10.1a9.06 9.06 0 0 1 4.31 5.4 2 2 0 0 1 -1.76 2.76 9.06 9.06 0 0 1 -5.4-4.31" />
      <path d="M22 2c-2.48 2.48-2.48 7.35 0 9.83" />
      <path d="M2 2c2.48 2.48 2.48 7.35 0 9.83" />
    </svg>
  );
}
