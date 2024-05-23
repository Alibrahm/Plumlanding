"use client";
import Plumlogo from "../../public/images/whiteplum.svg";
import Image from 'next/image';
function footer() {

  return (
<footer className="p-4 bg-[#522280] rounded-tr-[50px] md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
    
      <div className="flex flex-col ">
      <p className="my-6 text-gray-300 dark:text-gray-400">Join the waitlist to experience the best alternative to send money</p>
     <div className="mx-auto">
      <button className="border border-gray-400 rounded-md text-white font-[Circular Std] p-2">Join Waitlist</button>
      </div>

      <div className="w-3/5 mt-2 mx-auto px-3 bg-[#7830BC] rounded-md">
        <div className="flex justify-between p-3">
        <Image
    src={Plumlogo}
      width={90}
      height={40}
      alt="Plum"
      className="text-white"
    />
      <span className="my-auto text-sm text-gray-200 sm:text-center  dark:text-gray-400">
        © 2024 . Plum Solutions.</span></div>
        </div>     
      </div>
     
  </div>
</footer>
  );
}
export default footer;