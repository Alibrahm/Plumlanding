"use client";
import * as React from "react";
import Image from 'next/image';
import Plumlogo from "../../public/images/plumLogo.svg"

function ResponsiveAppBar() {

  return (
    

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0  border-gray-200 rounded-b-[1.75em] dark:border-gray-600">
  <div className="w-full flex bg-white items-center justify-between px-6 py-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image
    src={Plumlogo}
      width={100}
      height={50}
      alt="Picture of the author"
    />
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-[#522280] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-blue-800">Join Waitlist</button>
     
  </div>
  </div>
</nav>
  );
}
export default ResponsiveAppBar;