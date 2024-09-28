import Button from "../../Components/Button";
import CardWWD from "./CardWWD";

export default function WhatWeDo() {
  return (
    <div className="bg-darkBold">
      <div className="py-16 md:flex font font-poppins md:justify-between md:w-[80%] md:mx-auto xl:px-[120px] px-[12px]">
        <div className="md:w-[285px] md:flex md:flex-col md:justify-center">
          <div className="flex items-center gap-4">
            <span className="w-[20px] h-[3px] bg-red"></span>
            <h2 className="font-semibold uppercase text-[14px] text-text ">What we do</h2>
            <span className="w-[20px] h-[3px] bg-red"></span>
          </div>
          <h1 className="text-white text-[22px] md:text-[30px] font-bold mt-[12px]">Innovations and impact</h1>
          <p className="text-text font-roboto text-[20px] py-3 font-light mb-[8px]">Rise helps marketing leaders make smarter media investment decisions data.</p>
          <Button buttonText={"Discover More"} />
        </div>
        <div className="mt-[22px] md:flex md:justify-between md:items-start md:w-[60%]">
          <div className="md:w-1/2">
            <CardWWD icon="tabler:adjustments" header="Digital Media" description="Seamless integration across all digital media channels with advanced targeting fullcombined handful." />
            <CardWWD icon="fluent:notepad-sparkle-20-regular" header="Strategy" description="From concept to execution, we create digital campaigns from scratch and show combined with of structures." />
          </div>
          <div className="md:w-1/2">
            <CardWWD icon="streamline:layers-2" header="Development" description="We use the latest technology and we never stop learning and that's why model sentence structures." />
            <CardWWD icon="bi:bar-chart-line" header="Analytics" description="From concept to execution, we create digital structures campaigns from scratch and show you ." />
          </div>
        </div>
      </div>
    </div>
  )
}