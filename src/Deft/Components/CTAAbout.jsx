import ctaabout from '../../assets/img/ctaabout.jpg'
export default function () {
  return (
    <div className="h-[90vh] bg-darkBold px-[12px] py-[75px] md:flex md:justify-center md:items-center">
      <div className='md:flex md:w-[80vw] md:justify-center md:items-center'>
        <div className='py-[15px] md:w-[40%] md:h-[420px] md:px-[15px]'>
          <img src={ctaabout} alt="" className='w-[360px] h-[217px] object-cover md:w-full md:h-full' />
        </div>
        <div className='py-[15px] md:w-[32%] md:px-[15px] md:ml-[15px]'>
          <h1 className='text-white text-[22px] font-bold leading-7 font-poppins mb-[13px] sm:text-[30px] md:leading-[50px]'>We help clients to create Digital amazing experience. </h1>
          <p className='text-white text-[20px] md:text-[24px] font-light font-roboto'>We can help you to unlock opportunity by creating human-centered products.</p>
          <p className='text-text mt-[10px] font-roboto'>Our designers and engineers know collaboration is the essence of any project. It’s a simple philosophy we followed for nearly two decades. And it delivers results.</p>
          <a href="" className='uppercase px-[20px] md:py-[15px] md:px-[30px] py-[10px] bg-red text-white font-bold font-poppins text-[14px] mt-[23px] inline-block hover:bg-darkRed'>About Us</a>
        </div>
      </div>
    </div>
  )
}