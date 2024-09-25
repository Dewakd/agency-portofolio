import React from 'react';
import Button from '../../Components/Button';
export default function BannerHome() {
  return (
    <div className="pt-[68px] text-white">
      <div className=" bg-fun-background font-poppins h-[60vh] flex justify-center items-center bg-center bg-cover" style={{
        backgroundColor: 'rgba(127, 90, 240, 1)', // RGBa ungu dengan opasitas
        backgroundBlendMode: 'multiply'
      }}>
        <div className="px-[24px] pt-2">
          <h1 className="text-3xl font-extrabold leading-[30px]">Crafting Digital Experience to help Brands Grow</h1>
          <p className="text-lg font-light my-[26px]">The digital agency with a human approach</p>
          <Button buttonText={"Check out our work"}/>
        </div>
      </div>
    </div>
  )
}