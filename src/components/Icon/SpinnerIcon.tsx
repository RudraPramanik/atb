import React from "react";

interface SpinnerIconProps {
  className?: string;
}

const SpinnerIcon: React.FC<SpinnerIconProps> = ({ className }) => {
  return (
    <svg
      className={`animate-spin h-5 w-5 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0112 4v4a4 4 0 00-4 4H6zm8 0a4 4 0 004-4V4a8 8 0 01-8 8h4zm4-6a4 4 0 00-4-4v4a8 8 0 018 8h-4zm-8 4a8 8 0 01-8-8H0a12 12 0 0012 12v-4zm0-8a12 12 0 0012-12H4a8 8 0 01-4 6.373v1.254z"
      ></path>
    </svg>
  );
};

export default SpinnerIcon;
