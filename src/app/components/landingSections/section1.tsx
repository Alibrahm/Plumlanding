"use client";
import * as React from "react";
import Image from "next/image";
import LandingImage from "../../public/images/landinglady.jpg"

function landingSectionOne() {

  return (
    
    <div className=" h-screen" style={{ position: "relative" }}>
    <Image
      priority={true}
      alt="landing"
      src={LandingImage}
      sizes="100vw"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
    <div
      className="overlay"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />

    <div
      style={{
        position: "absolute",
        top: "22%",
        textAlign: "center",
        color: "white",
        zIndex: 1,
      }}
    >
    
    <div className="z-10 w-full max-w-5xl items-center flex justify-between  text-sm lg:flex">
    <div className="flex flex-col">
    <div className="w-4/5 ml-4 drop-shadow-lg ...">
    <div className="my-4  break-words dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-6xl font-bold text-[#522280]  ">
    The fastest  and safe way to send money to Africa
    </div>

    <span className="my-3 font-bold flex mx-1 border-none text-2xl mt-4 dark:drop-shadow-[0_0.2rem_#5e55558c] break-words backdrop-blur-sm  ">
        Enjoy the best rates in the world which enables your loved one to receive more.
        </span>

       <div className="flex flex-col">
        <span className="my-3 font-normal   border-none whitespace-break-spaces text-xl mt-4 drop-shadow-[0_0_0.6rem_#5e55558c]  backdrop-blur-md  ">
        Join the waiting list to be the first to be notified when we go live.
             Add your email.
        </span>

        <button type="button" className="mx-auto w-40  text-white bg-[#522280] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Waitlist</button>
</div>
  
</div>

    </div>
  </div>

    </div>
  </div>

  );
}
export default landingSectionOne;