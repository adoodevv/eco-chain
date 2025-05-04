import React from "react";

export const BurgerIcon = ({ className }) => (
   <svg
      id="burger"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
   >
      <line x1="2" y1="24" x2="30" y2="24" />
      <line x1="2" y1="16" x2="30" y2="16" />
      <line x1="2" y1="8" x2="30" y2="8" />
   </svg>
);

export const CloseIcon = ({ className }) => (
   <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
   >
      <path d="M8 6L24.9706 22.9706L22.8492 25.0919L5.87868 8.12132L8 6Z" stroke="[#00EE7D]" strokeLinecap="round" strokeLinejoin="round" > </path>
      < path d="M22.8491 6L5.87856 22.9706L7.99988 25.0919L24.9704 8.12132L22.8491 6Z" stroke="[#00EE7D]" strokeLinecap="round" strokeLinejoin="round" > </path>
   </svg>
);

export const PlusIcon = ({ className }) => (
   <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
   >
      <path d="M0 8H16" stroke="white" strokeWidth="2" > </path>
      < path d="M8 16V1.01328e-06" stroke="white" strokeWidth="2" > </path>
   </svg>
);