'use client';

import { useState, useEffect } from 'react';
import { GiSevenPointedStar } from 'react-icons/gi';

const Slider = () => {
   const slidingText = [
      "Regenerative Finance",
      "Green Technology",
      "Sustainability",
      "Climate Projects"
   ];

   const [position, setPosition] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setPosition((prevPosition) => (prevPosition - 1) % (slidingText.length * 200));
      }, 30);

      return () => clearInterval(interval);
   }, [slidingText.length]);

   return (
      <div className="relative">
         <div className="bg-linear-to-r from-[#D4FFE1]/30 via-[#9DFF8A]/50 to-[#07FF89]/50 py-4 md:py-6 overflow-hidden">
            <div
               className="flex items-center gap-20"
               style={{
                  transform: `translateX(${-position}px)`,
               }}
            >
               {slidingText.map((text, index) => (
                  <div key={index} className="flex items-center gap-4 md:gap-8">
                     <h2 className="text-white whitespace-nowrap text-2xl md:text-4xl lg:text-5xl poppins-slide">{text}</h2>
                     <GiSevenPointedStar className="text-white h-8 w-8 md:h-12 md:w-12" />
                  </div>
               ))}
            </div>
         </div>
         <div className="bg-linear-to-r from-[#07FF89]/50 via-[#9DFF8A]/50 to-[#D4FFE1]/30 py-4 md:py-6 overflow-hidden">
            <div
               className="flex items-center gap-20"
               style={{
                  transform: `translateX(${position}px)`,
               }}
            >
               {slidingText.map((text, index) => (
                  <div key={index} className="flex items-center gap-4 md:gap-8">
                     <h2 className="text-white whitespace-nowrap text-2xl md:text-4xl lg:text-5xl poppins-slide">{text}</h2>
                     <GiSevenPointedStar className="text-white h-8 w-8 md:h-12 md:w-12" />
                  </div>
               ))}
            </div>
         </div>
      </div>

   )
}

export default Slider
