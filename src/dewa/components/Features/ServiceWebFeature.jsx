import React from 'react'
import CardWWD from '../CardWWD'

export default function ServiceWebFeature() {
    const responsiveDescription = "We make sure your website works perfectly on any device, from desktop to mobile, ensuring a seamless experience for all users.";
    const SeoDescription = "Our SEO-optimized websites improve your rankings on Google, helping your site be more visible and easier to find.";
    const FastDescription = "We enhance your website's speed for faster loading times, improving both user experience and search engine rankings.";
    const AnalyticsDescription = "We implement analytics tools like Google Analytics, allowing you to monitor performance and make data-driven decisions.";

  return (
    <div className='w-full'>
        <h1 className='font-poppins text-2xl md:text-4xl  text-light py-[30px] px-[20px] text-start sm:text-center'>Our website design process ensures that <br/> <span className='font-bold'>you receive a result tailored perfectly to your specific needs.</span> </h1>
        <div className="mt-[40px] flex flex-col md:flex-row md:items-center">
          <div className="md:w-full flex-col md:flex items-start md:items-end">
            <CardWWD icon="mdi:responsive" header="Responsive Design" description={responsiveDescription} />
            <CardWWD icon="mdi:magnify" header="SEO Optimization" description={SeoDescription} />
          </div>
          <div className="md:w-full flex-col md:flex items-start md:items-start">
            <CardWWD icon="mdi:speedometer" header="Fast Loading Speed" description={FastDescription} />
            <CardWWD icon="mdi:chart-bar" header="Analytics" description={AnalyticsDescription} />
          </div>
        </div>
    </div>
  )
}
