'use client';

import { useState, useEffect } from 'react';
import { GiSevenPointedStar } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';

const Slider = () => {
   const slide = [
      {
         title: "Regenerative Finance",
         image: "/images/regenerative-finance.jpg",
         link: "/regenerative-finance"
      },
      {
         title: "Green Technology",
         image: "/images/green-technology.png",
         link: "/green-technology"
      },
      {
         title: "Sustainability",
         image: "/images/regenerative-finance.jpg",
         link: "/sustainability"
      },
      {
         title: "Climate Projects",
         image: "/images/green-technology.png",
         link: "/climate-projects"
      }
   ];

   const duplicatedSlides = [...slide, ...slide];

   const [position, setPosition] = useState(0);
   const slideWidth = 200;

   useEffect(() => {
      const interval = setInterval(() => {
         setPosition((prevPosition) => {
            const newPosition = prevPosition - 2;
            if (Math.abs(newPosition) >= slide.length * slideWidth) {
               return 0;
            }
            return newPosition;
         });
      }, 20);

      return () => clearInterval(interval);
   }, [slide.length]);

   const renderSlides = (slides: typeof slide) => (
      <div className="flex items-center gap-8">
         {slides.map((item, index) => (
            <Link href={item.link} key={index} className="flex items-center gap-2 md:gap-4 hover:opacity-100 transition-opacity group">
               <div className="relative overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:-translate-y-full">
                     <h2 className="text-white whitespace-nowrap text-5xl lg:text-9xl leading-none">{item.title}</h2>
                  </div>
                  <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                     <h2 className="text-[#00EE7D] whitespace-nowrap text-5xl lg:text-9xl leading-none">{item.title}</h2>
                  </div>
               </div>
               <div className="relative w-12 h-12 md:w-24 md:h-24 rounded-2xl overflow-hidden">
                  <Image
                     src={item.image}
                     alt={item.title}
                     fill
                     className="object-cover"
                  />
               </div>
            </Link>
         ))}
      </div>
   );

   return (
      <div className="relative uppercase py-32 flex flex-col items-center">
         <div>
            <div className="bg-black py-2 overflow-hidden">
               <div
                  className="flex items-center gap-8"
                  style={{
                     transform: `translateX(${position}px)`,
                  }}
               >
                  {renderSlides(duplicatedSlides)}
                  {renderSlides(duplicatedSlides)}
               </div>
            </div>
            <div className="bg-black py-2 overflow-hidden">
               <div
                  className="flex items-center gap-8"
                  style={{
                     transform: `translateX(${-position}px)`,
                  }}
               >
                  {renderSlides(duplicatedSlides)}
                  {renderSlides(duplicatedSlides)}
               </div>
            </div>
         </div>
         <div className="relative w-fit button-hover flex justify-center my-24 group">
            <span className="ping-button"></span>
            <span className="ping-button-2"></span>
            <Link href="/apps" className="px-3 py-2 md:px-4 md:py-3 bg-white text-xs md:text-sm border-2 hover:border-4 transition-all duration-300 border-[#00EE7D] bg-white text-black rounded-xl uppercase">
               <div className="relative overflow-hidden">
                  <div className="transition-transform duration-[1.125s] group-hover:-translate-y-full ease-[cubic-bezier(0.19,1,0.22,1)]">
                     Browse all apps
                  </div>
                  <div className="absolute top-0 left-0 transition-transform duration-[1.125s] translate-y-full group-hover:translate-y-0 ease-[cubic-bezier(0.19,1,0.22,1)]">
                     Browse all apps
                  </div>
               </div>
            </Link>
         </div>
      </div>
   )
}

export default Slider