import CardWWD from "./CardWWD";
import Button from "../../Components/Button";

export default function WhatWeDo() {
  return (
    <div className="py-14 font font-poppins">
      <div className="">
        <div className="flex items-center gap-4">
          <span className="w-[20px] h-[3px] bg-red"></span>
          <h2 className="font-semibold uppercase text-[14px] text-text">What we do</h2>
          <span className="w-[20px] h-[3px] bg-red"></span>
        </div>
        <h1 className="text-white text-[22px] font-bold mt-[12px]">Innovations and impact</h1>
        <p className="text-text font-roboto text-[20px] py-3 font-light">Rise helps marketing leaders make smarter media investment decisions data.</p>
        <Button buttonText={"Discover More"}/>
      </div>
      <div className="mt-[10px]">
        <CardWWD />
      </div>
    </div>
  )
}