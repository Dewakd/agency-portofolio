import React from 'react'
import { Icon } from '@iconify/react';
import Cta from './Cta';

export default function Footer(props) {
    const {isOpen} = props;
    
  return (
    <div className="bg-lightGray text-white py-[60px]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="xl:grid xl:grid-cols-[auto,1fr,1fr] xl:gap-8">
                <div className="space-y-8 xl:col-span-1 xl:w-[300px]">
                    <img
                        className="h-10"
                        src="/logo.svg" // Path to your logo
                        alt="Company Logo"
                    />
                    <p className="text-light text-base">
                        © 2019. All rights reserved.<br/>
                        Developed by Dewa & Deft
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 xl:mt-0 xl:col-span-2">
                    <div>
                        <h3 className="text-lg font-bold text-light font-poppins">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="text-base text-light hover:text-lightRed">About us</a></li>
                            <li><a href="#" className="text-base text-light hover:text-lightRed">Why Genox?</a></li>
                            <li><a href="#" className="text-base text-light hover:text-lightRed">Meet the team</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-light font-poppins">Services</h3>
                        <ul className="mt-4 space-y-4">
                            <li><a href="#" className="text-base text-light hover:text-lightRed">Digital Media</a></li>
                            <li><a href="#" className="text-base text-light hover:text-lightRed">Strategy</a></li>
                            <li><a href="#" className="text-base text-light hover:text-lightRed">Development</a></li>
                        </ul>
                    </div>
                    <div className="sm:col-span-1 w-auto">
                        <h3 className="text-lg font-bold text-light font-poppins">Get our staff</h3>
                        <form className="mt-4 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="h-14 appearance-none min-w-0 w-full  bg-transparent border border-gray-300 shadow-sm py-2 px-4 text-base text-text placeholder-gray-500 focus:outline-none"
                                placeholder="Your Email"
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0  relative">
                                <button
                                    type="submit"
                                    className={`h-8 text-darkBold absolute right-4 -top-[3.5rem] sm:top-3 border-l border-light pl-3 z-10 ${isOpen ? 'border-opacity-15' : 'border-opacity-100'}`}
                                    disabled={isOpen ? true : false}
                                >
                                    <Icon icon="mingcute:send-plane-line" width="1.8rem" height="1.8rem" className={`text-light hover:text-red transition duration-200 mr-0 sm:mr-2 ${isOpen ? 'text-opacity-15' : 'text-opacity-100'}` } />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
