import company1 from '../../assets/img/company/1.png';
import company2 from '../../assets/img/company/2.png';
import company3 from '../../assets/img/company/3.png';
import company4 from '../../assets/img/company/4.png';
import company5 from '../../assets/img/company/5.png';

export default function Company() {
  return (
    <div className="h-[395px] flex flex-wrap justify-center items-center bg-darkBold py-[70px] gap-[20px] md:gap-[70px] lg:h-[218px]">
      <img src={company1} alt="" className='w-[133px] lg:w-[160px] object-cover' />
      <img src={company2} alt="" className='w-[133px] lg:w-[160px] object-cover' />
      <img src={company3} alt="" className='w-[133px] lg:w-[160px] object-cover' />
      <img src={company4} alt="" className='w-[133px] lg:w-[160px] object-cover' />
      <img src={company5} alt="" className='w-[133px] lg:w-[160px] object-cover' />
    </div>
  )
}