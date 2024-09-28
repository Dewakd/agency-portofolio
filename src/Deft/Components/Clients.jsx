import company1 from '../../assets/img/company/1.png';
import company2 from '../../assets/img/company/2.png';
import company3 from '../../assets/img/company/3.png';
import company4 from '../../assets/img/company/4.png';
import company5 from '../../assets/img/company/5.png';

export default function Clients() {
  return (
    <div className="px-[15px] py-[75px] bg-darkGray">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <span className="w-[20px] h-[3px] bg-red"></span>
          <h2 className="font-poppins font-semibold uppercase text-[14px] text-text ">Clients</h2>
          <span className="w-[20px] h-[3px] bg-red"></span>
        </div>
        <h1 className="text-white text-[22px] md:text-[30px] font-bold mt-[12px] font-poppins sm:text-[30px] lg:leading-[55px] text-center mb-[15px] max-w-[350px]">Our friends who love to work with us</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-[20px] md:gap-[70px] md:mt-[50px] lg:h-[218px] lg:w-[80vw] mx-auto">
        <img src={company1} alt="" className='w-[133px] lg:w-[160px] object-cover' />
        <img src={company2} alt="" className='w-[133px] lg:w-[160px] object-cover' />
        <img src={company3} alt="" className='w-[133px] lg:w-[160px] object-cover' />
        <img src={company4} alt="" className='w-[133px] lg:w-[160px] object-cover' />
        <img src={company2} alt="" className='w-[133px] lg:w-[160px] object-cover' />
        <img src={company5} alt="" className='w-[133px] lg:w-[160px] object-cover' />
        <img src={company1} alt="" className='w-[133px] lg:w-[160px] object-cover' />
      </div>
    </div>
  )
}