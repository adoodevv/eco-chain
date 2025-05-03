'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
   {
      title: 'APP TITLE',
      description: 'The largest NFT marketplace & Runes platform',
      buttonText: 'Launch',
      image: '/images/eth.png',
   },
   {
      title: 'DISCOVER COLLECTIONS',
      description: 'Explore rare digital assets powered by EcoChain',
      buttonText: 'Explore',
      image: '/images/eth.png',
   },
   {
      title: 'CREATE & BUILD',
      description: 'Mint, sell, and grow your Web3 presence with powerful tools',
      buttonText: 'Start Building',
      image: '/images/eth.png',
   },
];

const HeroCarousel = () => {
   return (
      <section>
         <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="w-full h-screen relative"
         >
            {slides.map((slide, index) => (
               <SwiperSlide key={index}>
                  <div className="w-full h-full bg-cover bg-center flex items-center px-4 sm:px-6 md:px-20">
                     <div>
                        <div className="absolute top-1/4 sm:top-1/5 left-[5%] sm:left-[10%] md:left-[15%] max-w-[280px] sm:max-w-md md:max-w-xl text-white z-20">
                           <h1 className="text-[48px] sm:text-[64px] md:text-[96px] poppins-h1 mb-2 sm:mb-4">{slide.title}</h1>
                           <p className="text-[16px] sm:text-[18px] md:text-[20px] poppins-heading mb-4 sm:mb-6">{slide.description}</p>
                           <button className="bg-gradient-to-r from-[#96FEB4] from-10% via-[#1BDE63] via-30% to-[#00FFE6] to-90% text-[14px] sm:text-[16px] poppins-nav px-6 sm:px-[30px] py-2 sm:py-[8px] text-black rounded-full">
                              {slide.buttonText}
                           </button>
                        </div>
                        <div className="absolute top-[15%] sm:top-[10%] left-[10%] sm:left-[20%] md:left-[30%] hidden md:block z-10">
                           <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-[600px] md:w-[800px] lg:w-[1000px] h-auto object-contain"
                           />
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default HeroCarousel;
