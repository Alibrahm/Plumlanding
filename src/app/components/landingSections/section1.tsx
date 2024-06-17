"use client";
import * as React from "react";
import Image from "next/image";
import LandingImage from "../../public/images/landinglady.jpg"
import LandingImageR from "../../public/images/landingladyresized.jpg"

function landingSectionOne() {

  return (
    
    <div className=" h-screen" style={{ position: "relative" }}>
    <Image
      // priority={true}
      alt="landing"
      src={LandingImageR}
      placeholder="blur"
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
        top: "17%",
        textAlign: "center",
        color: "white",
        // height:"100%",
        display:'flex',
        justifyContent:'space-evenly',
        zIndex: 8,
      }}
    >
    
    <div className="z-10 ml-40 w-full h-full top-0 flex justify-end flex-col  text-sm lg:flex">

{/* <div className=" mx-auto"> */}
    <div className="my-4 flex  w-full break-words   text-6xl font-bold text-[#522280]  ">
    The fastest and<br />
 safe way to send<br />
  money to Africa
    </div>
{/* </div> */}
    <span className=" font-semibold flex border-none text-2xl mt-4 break-words backdrop-blur-sm  ">
        Enjoy the best rates in the world which<br/>  enable your loved ones to receive more.
        </span>

       <div className="flex flex-col my-3">
        <span className="-ml-10 font-normal line-clamp-2  border-none whitespace-break-spaces text-xl mt-4 backdrop-blur-sm  ">
        Join the waiting list to be the first to be notified when we go live.<br/>
             Add your email.
        </span>
        <div className="mx-auto">
        <button type="button" className="-ml-8 w-40  text-white mt-12 bg-[#522280] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-blue-800">
          Join Waitlist
          </button>
          </div>
</div> 
  </div>

    </div>
  </div>

  );
}
export default landingSectionOne;