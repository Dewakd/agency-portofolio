import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './ServiceWebProcess.css'


export default function ServiceWebProcess() {
    const processSteps = [
        {
          number: 1,
          title: 'Meet',
          description:
            'Penting untuk kami mengetahui lebih detail dari apa yang anda butuhkan untuk website anda.',
        },
        {
          number: 2,
          title: 'Plan',
          description:
            'Tahap perencanaan ini mencakup pembuatan sketsa desain dari kerangka dan peta situs.',
        },
        {
          number: 3,
          title: 'Design',
          description:
            'Tahap desain di mana kami mewujudkan website yang diinginkan dalam bentuk gambar sementara.',
        },
        {
          number: 4,
          title: 'Develop',
          description:
            'Tahap pemrograman di mana kami memastikan seluruh fungsi yang diinginkan dapat berjalan baik pada website.',
        },
        {
          number: 5,
          title: 'Test',
          description:
            'Tes merupakan hal yang penting sebelum kami meluncurkan website untuk memastikan semua sistem berfungsi normal & tidak ada error.',
        },
        {
          number: 6,
          title: 'Launch',
          description:
            'Website siap dipublikasikan via internet di perangkat manapun.',
        },
      ];
      return (
        <div className="bg-darkGray py-12 container mx-auto px-3 md:px-10 xl:pl-[200px] lg:pl-[80px]">
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-start text-light mb-10 px-3 min-w-sm max-w-md">
            Proses Pembuatan Website Kami
          </h2>
    
          {/* Horizontal Scroll Section */}
          <div className="overflow-x-auto">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                scrollbar={{
                draggable: true,
              }}
                modules={[Scrollbar]}
                className="mySwiper"
              breakpoints={{
                375:{
                    slidesPerView: 1.2,
                },
                640: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView: 3.5,
                },
                1280: {
                  slidesPerView: 4.5,
                },
              }}
            >
              {processSteps.map((step, index) => (
                <SwiperSlide key={index}>
                  <div className="p-4 text-center font-poppins px-3 mb-10">
                    <div className="text-red text-5xl text-start font-bold mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-start text-light mb-2">
                      {step.title}
                    </h3>
                    <p className="font-roboto text-md text-text text-start max-w-[333px] md:max-w-[300px]">
                      {step.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      );
}
