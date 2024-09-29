import React from 'react'
import Button from '../../Components/Button';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function ContactForm() {
    return (
        <div className="flex-1 bg-darkBold text-white px-[15px] py-[150px] w-full  ">
          <div className="flex items-center gap-4 mb-3">
            <span className="w-[20px] h-[3px] bg-red"></span>
            <h2 className="font-semibold uppercase text-[14px] text-light font-roboto">Fill the form</h2>
          </div>
          <h2 className="text-2xl font-bold mb-8 font-poppins w-full sm:text-3xl sm:w-[80%] md:w-[60%] lg:w-[30%] sm:leading-10">Describe your project and leave us your contact info</h2>
          <div className="hidden grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-7xl lg:mx-auto ">
            <div>
              <input className="mb-[20px] py-[19px] w-full bg-transparent border-b border-opacity-40 border-gray-500" placeholder="Your Name" />
              <input className="mb-[20px] py-[19px] w-full bg-transparent border-b border-opacity-40 border-gray-500" placeholder="Your Address" />
              <input className="mb-[20px] py-[19px] w-full bg-transparent border-b border-opacity-40 border-gray-500" placeholder="When do you want to start?" />
            </div>
            <div>
              <input className="mb-[20px] py-[19px] w-full bg-transparent border-b border-opacity-40 border-gray-500" placeholder="Your Email" />
              <input className="mb-[20px] py-[19px] w-full bg-transparent border-b border-opacity-40 border-gray-500" placeholder="Your Company" />
              <select className="mb-[20px] py-[19px] w-full bg-transparent border-b border-opacity-40 border-gray-500 text-text">
                <option>What your Budget</option>
              </select>
            </div>
            <div className="flex flex-1 md:col-span-2 md:row-start-1 lg:col-span-1 lg:row-auto lg:w-[300px] flex-col bg-lightGray text-text p-[50px] font-roboto">
                <h2 className="text-xl font-bold font-poppins text-white">Genox Studio</h2>
                <p className='text-xl my-3 font-roboto font-normal flex'>119 W 24th Street 4th New York, USA</p>
                <p className='flex items-center text-md font-bold py-3 border-b border-gray-500 border-opacity-40'>
                <Icon icon="ic:baseline-whatsapp" width="1.8em" height="1.8em"  className='text-red mr-3'></Icon>
                  +1 917 330 3116
                </p>
                <p className='flex items-center text-md font-bold py-3 border-b border-gray-500 border-opacity-40'>
                <Icon icon="clarity:email-line" width="1.8em" height="1.8em"  className='text-red mr-3'></Icon>
                  hello@this.work.com
                </p>
                <p className='flex items-center text-md font-bold py-3 border-b border-gray-500 border-opacity-40'>
                <Icon icon="hugeicons:maps-location-01" width="1.8em" height="1.8em"  className='text-red mr-3'></Icon>
                  Get Directions
                </p>
            </div>
          </div>
          <div className='hidden md:block'>
            <textarea className="w-[700px] md:w-full xl:w-[800px] block bg-transparent border-b border-gray-500 py-2 mb-4" placeholder="Briefly tell us about your project." />
            <Button buttonText="Send Message"/>
          </div>
            {/* On Mobile */}
          <div className="grid-cols-1 gap-4 md:hidden">
            <div className="flex flex-1 md:col-span-2 md:row-start-1 lg:col-span-1 lg:row-auto lg:w-[300px] flex-col bg-lightGray text-text p-[50px] font-roboto mb-8">
                <h2 className="text-xl font-bold font-poppins text-white">Genox Studio</h2>
                <p className='text-xl my-3 font-roboto font-normal flex'>119 W 24th Street 4th New York, USA</p>
                <a href='#' className='flex items-center text-md font-bold py-3 border-b border-gray-500 border-opacity-40'>
                <Icon icon="ic:baseline-whatsapp" width="1.8em" height="1.8em"  className='text-red mr-3'></Icon>
                  +1 917 330 3116
                </a>
                <a href='#' className='flex items-center text-md font-bold py-3 border-b border-gray-500 border-opacity-40'>
                <Icon icon="clarity:email-line" width="1.8em" height="1.8em"  className='text-red mr-3'></Icon>
                  hello@this.work.com
                </a>
                <a href='#' className='flex items-center text-md font-bold py-3 border-b border-gray-500 border-opacity-40'>
                <Icon icon="hugeicons:maps-location-01" width="1.8em" height="1.8em"  className='text-red mr-3'></Icon>
                  Get Directions
                </a>
              </div>
            <div>
              <input className="xl:w-[350px] w-full bg-transparent border-b border-opacity-40 border-gray-500 py-2 mb-4" placeholder="Your Name" />
              <input className="xl:w-[350px] w-full bg-transparent border-b border-opacity-40 border-gray-500 py-2 mb-4" placeholder="Your Email" />
              <input className="xl:w-[350px] w-full bg-transparent border-b border-opacity-40 border-gray-500 py-2 mb-4" placeholder="Your Address" />
              <input className="xl:w-[350px] w-full bg-transparent border-b border-opacity-40 border-gray-500 py-2 mb-4" placeholder="Your Company" />
            </div>
            <div>
              <input className="xl:w-[350px] w-full bg-transparent border-b border-opacity-40 border-gray-500 py-2 mb-4" placeholder="When do you want to start?" />
              <select className="xl:w-[350px] w-full bg-transparent border-b border-opacity-40 border-gray-500 py-2 mb-4">
                <option>What your Budget</option>
              </select>
            </div>
          </div>
          <div className='block md:hidden '>
            <textarea className="w-full bg-transparent border-b border-gray-500 py-2 mb-8" placeholder="Briefly tell us about your project." />
            <Button buttonText="Send Message"/>
          </div>
        </div>
      );
}
