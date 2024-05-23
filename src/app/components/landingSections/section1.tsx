"use client";
import * as React from "react";
import Image from "next/image";
import LandingImage from "../../public/images/landinglady.jpg"

function landingSectionOne() {

  return (
    
    <div className="content" style={{ position: "relative" }}>
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
        // background:
        //   "linear-gradient(to bottom, rgba(82, 32, 128, 0.426), rgba(26, 10, 40, 0.6), #000000 93%)",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "22%",
        // left: "36%",
        // transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white",
        zIndex: 1, // Ensure text is above the overlay
      }}
    >
    
    <div className="z-10 w-full max-w-5xl items-center flex justify-between font-mono text-sm lg:flex">

    <div className="flex flex-col">


   

    <div className="w-3/5 ml-4 drop-shadow-lg ...">
  <div className=" break-words dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-5xl font-bold text-[#522280]  ">
    The fastest  and safe way to send money to Africa
    </div>

    <span className="flex mx-1 border-none text-2xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] break-words backdrop-blur-sm  ">
        Enjoy the best rates in the world which enables your loved one to receive more.
        </span>

    <span className="flex mx-1 mt-14 border-none text-xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] break-words backdrop-blur-sm  ">
    Join the waiting list to be the first to be notified when we go live. Add your email. 
    </span> 
</div>

    </div>
  </div>

    </div>
  </div>

  );
}
export default landingSectionOne;