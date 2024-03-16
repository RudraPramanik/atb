import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileIcon from './Icon/ProfileIcon';


const Header: React.FC = () => {
  return (
    <header className="bg-[#350880] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 ">
        <ProfileIcon/>
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
            <li className="mr-4">
              <Link href="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          {/* <Link href="/profile" >
         <ProfileIcon/>
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
