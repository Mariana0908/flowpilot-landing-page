import type { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient
          id="flowpilot-logo-gradient"
          x1="10"
          y1="8"
          x2="34"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <path
        d="M14 13L20.5 6.5H37L31.5 12H21.5V19.5H30L25 24.5H21.5V33.5L14 41V13Z"
        fill="url(#flowpilot-logo-gradient)"
      />
    </svg>
  );
}