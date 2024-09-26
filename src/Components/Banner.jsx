import React from 'react'
import Button from './Button'

function Banner(props) {
    const {title, description, img, button, isDescription} = props;
    return (
        <div className="text-white w-[100vw] md:w-[85vw] mx-auto px-[12px]">
            <div className={` ${img} font-poppins h-[62vh] items-center flex justify-center bg-center bg-cover`} style={{
            backgroundColor: 'rgba(127, 90, 240, 1)', // RGBa ungu dengan opasitas
            backgroundBlendMode: 'multiply'
            }}>
            <div className="px-[24px] pt-2 w-[100%] xl:w-[70%] flex flex-col items-center">
                <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold  md:leading-[70px] md:text-[50px] lg:leading-[90px]">{title}</h1>
                {isDescription ? <p className="text-center text-m sm:text-[25px] xl:w-[80%] font-light my-[26px] md:text-[30px]">{description}</p> :
                 null}
                
                {button ? 
                    <Button buttonText={"Check out our work"} />
                    : null
                }
                
            </div>
            </div>
        </div>
      )
}

export default Banner