import { Link } from "react-router-dom"

export default function WhyChoose() {
  return (
    <div className="h-[466px] bg-WhyChoose bg-fixed bg-cover bg-center flex justify-center items-center sm:h-[574px] lg:justify-end lg:h-[100vh]">
      <div className="px-[15px] lg:w-[800px]">
        <div className="h-[316px] bg-[#121d26] w-full p-[40px] sm:w-[510px] sm:h-[401px] flex justify-center flex-col lg:w-[445px] lg:h-[526px] lg:p-[80px]">
          <div className="flex items-center gap-4  mb-[13px]">
            <span className="w-[20px] h-[3px] bg-red"></span>
            <h2 className="font-semibold font-poppins uppercase text-[14px] text-text ">Why choose us</h2>
            <span className="w-[20px] h-[3px] bg-red"></span>
          </div>
          <h1 className="text-white text-[22px] sm:leading-10 font-bold leading-7 md:text-[30px] mb-[13px] font-poppins sm:text-[30px]  lg:leading-[45px]">We love to make a difference by creating digital experiences that simplify and enhance value.</h1>
          <Link to="/service" className="px-[20px] py-[10px] bg-red font-bold text-white uppercase font-poppins text-[14px] inline-block mt-[5px] max-w-[160px] text-center lg:px-[30px] lg:py-[15px]">Our Services</Link>
        </div>
      </div>
    </div>
  )
}