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
    
    <div className="z-10 w-full h-full max-w-5xl flex flex-start flex-col  text-sm lg:flex">

<div className="ml-14 my-auto">
    <div className="my-4 flex  w-full break-words   text-6xl font-bold text-[#522280]  ">
    The fastest and<br />
 safe way to send<br />
  money to Africa
    </div>
</div>
    <span className="my-3 font-semibold flex mx-16 border-none text-2xl mt-4 break-words backdrop-blur-sm  ">
        Enjoy the best rates in the world which<br/>  enable your loved ones to receive more.
        </span>

       <div className="flex flex-col my-3">
        <span className="mx-2 font-normal line-clamp-2  border-none whitespace-break-spaces text-xl mt-4 backdrop-blur-md  ">
        Join the waiting list to be the first to be notified when we go live.<br/>
             Add your email.
        </span>

        <button type="button" className="mx-auto w-40  text-white mt-4 bg-[#522280] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-blue-800">Join Waitlist</button>
</div> 
  </div>

    </div>
  </div>

  );
}
export default landingSectionOne;