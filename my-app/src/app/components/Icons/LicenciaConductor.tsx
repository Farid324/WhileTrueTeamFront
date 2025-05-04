import * as React from "react";
import { SVGProps } from "react";

const LicenciaConductor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      fill="#11295B"
      fillRule="evenodd"
      d="M4.083 4.083v19.834h19.834V4.083H4.083ZM2.333 3.5a1.75 1.75 0 0 1 1.75-1.75h19.834a1.75 1.75 0 0 1 1.75 1.75v19.834a1.75 1.75 0 0 1-1.75 1.75H4.083a1.75 1.75 0 0 1-1.75-1.75V3.5Zm9.334 7.584a3.208 3.208 0 1 1 0-6.417 3.208 3.208 0 0 1 0 6.417ZM6.417 18.083a4.667 4.667 0 0 1 9.333 0v1.167h-9.5v-1.167h.167Zm9.916-2.333h5.834v1.75H16.333v-1.75Zm0 3.5h5.834v1.75H16.333v-1.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default LicenciaConductor;
