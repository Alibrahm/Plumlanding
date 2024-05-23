"use client";
import * as React from "react";
import Image from "next/image";
import marketlady from "../../public/images/marketlady.svg"
function landingSectionTwo() {

  return (
    
   <div className="w-full overflow-hidden drop-shadow-lg ">
    <div className="overflow-hidden  my-auto grid grid-cols-3 gap-3  p-4 w-full  backdrop-blur-sm bg-[#e1dfda]">
        
 

<div className="p-3">
    <Image
      priority={true}
      alt="icons"
      src={marketlady}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
    </div>


<div className=" col-span-2 my-auto border-none text-xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-full  ">
    <div className="my-auto text-center w-4/5 px-6 text-[#4E306B] font-semibold text-xl">
SendPlum is a money remittance technology that enables immigrants to digitally send money back home to various countries across Africa within seconds.

You will be able to send money from US, UK, Europe to various countries in Africa. You only need a smartphone and a bank account. 
   </div> </div> 





    </div>
    </div>

  );
}
export default landingSectionTwo;