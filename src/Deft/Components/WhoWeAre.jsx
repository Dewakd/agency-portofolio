import CardWWA from "./CardWWA";

export default function () {
  return (
    <div className="bg-whoWeAre h-[972px] w-full bg-center bg-fill px-[12px] flex justify-center items-center">
      <div className="= bg-darkBold bg-opacity-85 py-[45px] px-[35px] font-poppins md:w-[40%]">
        <div className="flex items-center gap-4  mb-[13px]">
          <span className="w-[20px] h-[3px] bg-red"></span>
          <h2 className="font-semibold font-poppins uppercase text-[14px] text-text ">Who we are</h2>
          <span className="w-[20px] h-[3px] bg-red"></span>
        </div>
        <h1 className="text-white text-[22px] md:leading-10 font-bold leading-7 md:text-[30px]">Our designers and engineers know collaboration is the essence</h1>
        <div className="w-full mt-[15px] sm:flex">
          <div className="w-full">
            <CardWWA icon="streamline:blank-notepad" header="Quality Products" description="We provide quality products with top creative talent build brands that stand out. " />
            <CardWWA icon="icon-park-outline:bookmark" header="True Value" description="It’s not just our track record the efficiency  We increase true value talent to build. " />
          </div>
          <div>
            <CardWWA icon="streamline:bag-suitcase-2" header="Discover & Sharing" description="Whether you are fortune we Discover & share products with top creative talent. " />
            <CardWWA icon="ci:arrow-reload-02" header="Build Faster" description="Unlock opportunity by creating human-centered products to build faster." />
          </div>
        </div>
      </div>
    </div>
  )
}