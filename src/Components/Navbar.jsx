import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const {isOpen, setIsOpen} = props;
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10">
      {/* Sticky Navbar container */}
      <div className={`font-poppins z-50 snap-y flex items-center justify-between w-full px-[20px] md:px-[100px] lg:px-[100px] xl:px-[150px]  text-white transition-all duration-300 ease-in-out ${isScrolled ? 'bg-lightGray py-[25px]' : 'bg-darkBold py-[35px] snap-none'}`}>
        <div className="text-lg font-bold">Agency</div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        {/* Desktop links */}
        <ul className="hidden space-x-8 font-semibold md:flex uppercase">
          <li><Link to="/" className="text-white hover:text-red">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-red">About</Link></li>
          <li><Link to="/workpage" className="text-white hover:text-red">Works</Link></li>
          <li><Link to="/services" className="text-white hover:text-red">Services</Link></li>
          <li><Link to="/contact" className="text-white hover:text-red">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu and Overlay */}
      <div className={`fixed inset-0 bg-darkBold bg-opacity-80 z-0 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} `} onClick={() => setIsOpen(false)}></div>
      <div className={`fixed top-0 -left-1 w-[75%] max-w-md bg-darkBold h-full z-30 p-5 space-y-5 transform duration-[300ms] transition-transform ${isOpen ? 'translate-x-0 left-0' : '-translate-x-full'}`}>
        <ul className='font-semibold text-white'>
          <li className='py-3 border-b hover:text-red border-b-gray-700'><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className='py-3 border-b hover:text-red border-b-gray-700'><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li className='py-3 border-b hover:text-red border-b-gray-700'><Link to="/works" onClick={() => setIsOpen(false)}>Works</Link></li>
          <li className='py-3 border-b hover:text-red border-b-gray-700'><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li className='py-3 border-b hover:text-red border-b-gray-700'><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
