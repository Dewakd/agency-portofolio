import Button from "../../Components/Button";
import CardWWD from "./CardWWD";

export default function WhatWeDo() {
  return (
    <div className="py-16 font font-poppins">
      <div className="">
        <div className="flex items-center gap-4">
          <span className="w-[20px] h-[3px] bg-red"></span>
          <h2 className="font-semibold uppercase text-[14px] text-text">What we do</h2>
          <span className="w-[20px] h-[3px] bg-red"></span>
        </div>
        <h1 className="text-white text-[22px] font-bold mt-[12px]">Innovations and impact</h1>
        <p className="text-text font-roboto text-[20px] py-3 font-light mb-[8px]">Rise helps marketing leaders make smarter media investment decisions data.</p>
        <Button buttonText={"Discover More"} />
      </div>
      <div className="mt-[22px]">
        <CardWWD icon="tabler:adjustments" header="Digital Media" description="Seamless integration across all digital media channels with advanced targeting fullcombined handful." />
        <CardWWD icon="fluent:notepad-sparkle-20-regular" header="Strategy" description="From concept to execution, we create digital campaigns from scratch and show combined with of structures." />
        <CardWWD icon="streamline:layers-2" header="Development" description="From concept to execution, we create digital campaigns from scratch and show combined with of structures." />
      </div>
    </div>
  )
}