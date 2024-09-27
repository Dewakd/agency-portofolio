import { Link } from "react-router-dom"
export default function Banner() {
  return (
    <div className="bg-darkBold px-[12px]">
      <div className="bg-imgBanner h-[30vh] bg-center bg-cover flex items-center px-[15px] md:h-[80vh] md:w-[80vw] md:mx-auto" >
        <div className="px-[15px] w-[70vw] md:w-[50vw] lg:w-[40vw] md:ml-[200px]">
          <h1 className="text-[28px] font-black md:leading-[60px] lg:leading-[80px] leading-10 font-poppins text-white mb-[10px] sm:text-[40px] lg:text-[60px]">Specialist in Digital Solutions</h1>
          <Link to="/contact" className="uppercase mt-[25px] py-[10px] px-[20px] bg-red hover:bg-darkRed font-bold font-poppins text-white inline-block text-[14px] lg:px-[30px] lg:py-[14px]">Let's talk</Link>
        </div>
      </div>
    </div>
  )
}