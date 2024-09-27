export default function WeAre() {
  return (
    <div className="px-[15px] bg-darkBold py-[75px] lg:py-[150px] flex flex-wrap justify-center gap-[20px] lg:gap-[30px]">
      <div className="pb-[15px] sm:w-[540px]">
        <div className="flex items-center gap-4">
          <span className="w-[20px] h-[3px] bg-red"></span>
          <h2 className="font-semibold uppercase text-[14px] text-text ">We Are</h2>
          <span className="w-[20px] h-[3px] bg-red"></span>
        </div>
        <h1 className="text-white text-[22px] md:text-[30px] font-bold mt-[12px] font-poppins sm:text-[30px] lg:leading-[55px]">This Agency is a bold-thinking digital agency working for leading brands worldwide.</h1>
        <p className="text-text font-roboto text-[20px] py-3 font-light">It’s not just our track record, the efficiency of our process and the quality of our products. It’s the secret ingredient that makes it all happen: the bravery of our people.</p>
      </div>
      <div className="bg-[#121d26] sm:w-[540px] md:w-[360px] h-[207px] flex flex-col justify-center p-[30px] sm:h-[175px] md:h-[200px] lg:w-[255px] lg:h-[320px]">
        <h1 className="font-bold text-white font-poppins text-[18px] sm:mb-[8px]">What We Do</h1>
        <p className="text-text mt-[13px] md:w-auto font-roboto sm:w-[450px]">We work at the frontier of interactive development and design. We are highly skilled and happily take on complex technical challenges.</p>
      </div>
      <div className="bg-[#121d26] sm:w-[540px] md:w-[360px] h-[207px] flex flex-col justify-center p-[30px] sm:h-[175px] md:h-[200px] lg:w-[255px] lg:h-[320px]">
        <h1 className="font-bold text-white font-poppins text-[18px] sm:mb-[8px]">Culture</h1>
        <p className="text-text mt-[13px] font-roboto sm:w-[450px] md:w-auto">A friendly, ambitious team in a great office space makes Uppercase an awesome place to work. We believe having fun leads to better results dadcation.</p>
      </div>
    </div>
  )
}