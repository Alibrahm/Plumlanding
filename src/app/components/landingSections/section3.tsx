"use client";
import * as React from "react";
import Image from "next/image";
import marketlady from "../../public/images/marketlady.svg"
function landingSectionTwo() {

  return (
    
   <div className="w-full  overflow-hidden  drop-shadow-lg  backdrop-blur-sm bg-[#e1dfda]">
<div className="px-7 flex">
    <Image
      priority={true}
      alt="icons"
      src={marketlady}
      className="py-5"
      style={{
       
        height: '415px',
      }}
    />
  
    <div className="my-auto text-center w-3/5  text-[#4E306B] font-normal text-3xl">
SendPlum is a money remittance technology that enables immigrants to digitally send money back home to various countries across Africa within seconds.

<span className="flex mt-3 text-3xl break-words">You will be able to send money from US, UK, Europe to various countries in Africa.
 You only need a smartphone and a bank account. </span>
   </div> 
   </div>

        
 










    {/* </div> */}
    </div>

  );
}
export default landingSectionTwo;