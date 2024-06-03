"use client";
import * as React from "react";
import Image from "next/image";
import mpesa from "../../public/images/mpesa.png"
import merchantpayments from "../../public/images/merchant.svg"
import freelancepayments from "../../public/images/freelancepayments.svg"
import savings from "../../public/images/savings.svg"
import sendmoney from "../../public/images/exportmoney.svg"
function landingSectionTwo() {

  return (
    
   <div className="w-full p-8 mx-14">
    <div>
        <span className="flex justify-center font-semibold text-md text-[#522280]">Features</span>
    <div className="grid grid-cols-4 gap-4 my-3 w-4/5 mx-auto px-6">
        
   

<div className="w-full flex flex-col sm:w-auto bg-[#FAF9F6]  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg  items-center justify-center px-4 py-2.5  dark:focus:ring-gray-700">
    <Image
      priority={true}
      alt="icons"
      src={merchantpayments}
      style={{
        width: "120px",
        height: "98px",
      }}
    />
   
        <div className="-mt-1  text-sm font-semibold text-center text-[#522280]">Merchant Payments</div>

</div>

<div className="w-full flex flex-col sm:w-auto bg-[#FAF9F6]  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg  items-center justify-center px-4 py-2.5  dark:focus:ring-gray-700">
    <Image
      priority={true}
      alt="icons"
      src={freelancepayments}
      style={{
        width: "120px",
        height: "98px",
      }}
    />
   
        <div className="-mt-1  text-sm font-semibold text-center text-[#522280]">Freelance Payments</div>

</div>

<div className="w-full flex flex-col sm:w-auto bg-[#FAF9F6]  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg  items-center justify-center px-4 py-2.5  dark:focus:ring-gray-700">
    <Image
      priority={true}
      alt="icons"
      src={savings}
      style={{
        width: "120px",
        height: "98px",
      }}
    />
   
        <div className="-mt-1  text-sm font-semibold text-center text-[#522280]">Savings & Investments</div>

</div>

<div className="w-full flex flex-col sm:w-auto bg-[#FAF9F6]  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg  items-center justify-center px-4 py-2.5  dark:focus:ring-gray-700">
    <Image
      priority={true}
      alt="icons"
      src={sendmoney}
      style={{
        width: "120px",
        height: "98px",
      }}
    />
   
        <div className="-mt-1  text-sm font-semibold text-center text-[#522280]">Send Money</div>

</div>


    </div>
    </div>
   </div>

  );
}
export default landingSectionTwo;