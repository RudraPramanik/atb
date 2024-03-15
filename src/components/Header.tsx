import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Header: React.FC = () => {
  return (
    <header className="bg-[#350880] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 ">
          <Image src="/logo.png" alt="Logo" width={50} height={40} />
          <h1 className="text-lg font-semibold">Job Platform</h1>
        </div>
        <nav>
          <ul className="flex items-center">
            <li className="mr-4">
              <Link href="/">
               Home
              </Link>
            </li>
            <li className="mr-4">
              <Link href="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        <div>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
