import React from "react";

interface SpinnerIconProps {
  className?: string;
}

const ProfileIcon: React.FC<SpinnerIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 fill-current"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 12a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 2a8 8 0 100 16 8 8 0 000-16zM1 10a9 9 0 1118 0 9 9 0 01-18 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ProfileIcon;
