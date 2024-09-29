import React from 'react'
import Banner from '../../Components/Banner'
import ServiceWebFeature from '../components/Features/ServiceWebFeature';
import ServiceWebProcess from '../components/Process/ServiceWebProcess';

export default function Services() {
  const title = "Layanan Jasa Desain Website"
  const description = "We create beautiful, user-friendly websites that showcase your brand and enhance your online presence.";
  const img = "bg"
  return (
    <div className='bg-darkBold'>
      <Banner title={title} img={img} button={false} description={description} isDescription={true} contentWithImage={true}/>

      <div className='flex md:justify-center px-3 md:px-10 py-[100px]'>
        <ServiceWebFeature />
      </div>
      <div className='bg-darkGray'>
        <ServiceWebProcess />
      </div>


    </div>
  )
}