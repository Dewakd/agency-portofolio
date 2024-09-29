import React from 'react'
import Button from './Button'
import serviceBanner from '../assets/img/web-service-banner.png'

function Banner(props) {
    const {title, description, img, button, isDescription, contentWithImage} = props;
    return (
        <div className="text-white w-[100vw] md:w-[85vw] mx-auto px-[12px]">
            <div className={` ${img} font-poppins ${contentWithImage ? 'md:h-[70vh] xl:h-[62vh]' : null} h-[62vh] items-center flex justify-center bg-center bg-cover`} style={{
            backgroundColor: 'rgba(127, 90, 240, 1)', // RGBa ungu dengan opasitas
            backgroundBlendMode: 'multiply'
            }}>
            <div className={`px-[24px] pt-2 w-[100%]  flex flex-col items-center ${contentWithImage ? 'lg:flex-row' : null }`}>

                <div>
                    <h1 className={`text-center text-3xl sm:text-5xl md:text-6xl font-extrabold  md:leading-[70px] md:text-[50px] lg:leading-[90px] ${contentWithImage ? 'text-center w-full lg:leading-[40px] lg:text-4xl lg:text-start xl:text-6xl xl:leading-[75px] lg:pl-5 xl:pl-10' : null}`}>{title}</h1>

                    {isDescription ? <p className={`text-center text-m sm:text-[25px] xl:w-[80%] font-light my-[26px] md:text-[30px] ${contentWithImage ? 'sm:text-[20px] md:text-[23px] md:mt-1 md:mb-8 lg:mt-5 lg:text-[20px] lg:text-start lg:pl-5 xl:pl-10 2xl:text-[25px]' : null}`}>{description}</p> :
                    null}
                </div>

                    {contentWithImage ? <img className='w-full sm:w-[70%] lg:w-[60%]' src={serviceBanner} alt="Service Banner image"/> : null}

                
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