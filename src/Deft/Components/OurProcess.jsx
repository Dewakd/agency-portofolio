import CardOP from "./CardOP";

export default function OurProcess() {
  return (
    <div className="flex flex-col items-center justify-center py-[75px] bg-darkGray">
      <div className="flex flex-col mb-[38px] items-center justify-center px-[12px]">
        <div className="flex items-center justify-center gap-4">
          <span className="w-[20px] h-[3px] bg-red"></span>
          <h2 className="font-semibold uppercase text-[14px] text-text font-poppins">our process</h2>
          <span className="w-[20px] h-[3px] bg-red"></span>
        </div>
        <h1 className="text-white text-[22px] md:text-[30px] font-bold mt-[12px] font-poppins text-center leading-7">We make products with strategy</h1>
      </div>
      <div className="px-[12px]">
        <CardOP icon="fluent:clipboard-data-bar-20-regular" header="Concept" description="We listen, research, ideate, marinate, present, and  Duis aute irure dolor in reprehenderit in voluptate." />
        <CardOP icon="fluent:clipboard-data-bar-20-regular" header="Production" description="The best crews with the most up-to-date gear and technologies capture your story. Duis aute irure dolor." />
        <CardOP icon="fluent:clipboard-data-bar-20-regular" header="Post Production" description="Producers, editors, designers, and animators, shape and sculpt your video ‘til it’s ready for prime time." />
      </div>
    </div>
  )
}