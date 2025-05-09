import React from 'react';
import type { SVGProps } from 'react';

export default function CategoriaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={4}>
        <path d="M42 8H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z" />
        <path d="M36 16h-8v8h8z" />
        <path strokeLinecap="round" d="M12 32h24M12 16h6m-6 8h6" />
      </g>
    </svg>
  );
}
