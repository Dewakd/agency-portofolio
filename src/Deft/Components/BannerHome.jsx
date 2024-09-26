import React from 'react';
import Button from '../../Components/Button';
export default function BannerHome() {
  return (
    <div className='w-full bg-darkBold'>
      <div className="text-white md:w-[85vw] md:mx-auto px-[12px]">
        <div className=" bg-fun-background font-poppins md:h-[100vh] lg:-mt-[62px] h-[62vh] flex justify-center md:justify-start items-center bg-center bg-cover" style={{
          backgroundColor: 'rgba(127, 90, 240, 1)', // RGBa ungu dengan opasitas
          backgroundBlendMode: 'multiply'
        }}>
          <div className="px-[24px] pt-2 md:w-[60%] md:ml-[100px]">
            <h1 className="text-3xl font-extrabold leading-[30px] md:leading-none md:text-[72px] lg:leading-[90px]">Crafting Digital Experience to help Brands Grow</h1>
            <p className="text-lg font-light my-[26px] md:text-[30px]">The digital agency with a human approach</p>
            <Button buttonText={"Check out our work"} />
          </div>
        </div>
      </div>
    </div>
  )
}