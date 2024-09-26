import React from 'react'
import Banner from '../../Components/Banner'
import Button from '../../Components/Button'
import ContactContent from '../components/ContactContent'

export default function Contact() {
    const title = "Designing Digital Experiences for the Modern World."
    const description = "Explore our portfolio and see how we can transform your digital presence."
    const img = "bg-work-banner-background"
    return (
        <div className='bg-darkBold'>
            <Banner title={title} description={description} img={img} button={false} isDescription={false}/>
            <div className='flex justify-center'>
                <ContactContent/>
            </div>
        </div>
    )
}
