'use client'

import React, { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { FaPlay } from "react-icons/fa";
import { apps } from '@/constants/apps'
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function Hero() {
   const slides = apps.slice(0, 6)
   const [currentSlide, setCurrentSlide] = useState(0)
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
   const router = useRouter();

   const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
   const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

   const onSelect = useCallback(() => {
      if (!emblaApi) return
      setCurrentSlide(emblaApi.selectedScrollSnap())
   }, [emblaApi])

   useEffect(() => {
      if (!emblaApi) return
      onSelect()
      emblaApi.on('select', onSelect)
      emblaApi.on('reInit', onSelect)
   }, [emblaApi, onSelect])

   useEffect(() => {
      if (!emblaApi) return

      const autoplay = setInterval(() => {
         emblaApi.scrollNext()
      }, 3000)

      return () => clearInterval(autoplay)
   }, [emblaApi])

   const handleThumbnailClick = (index: number) => {
      emblaApi?.scrollTo(index)
   }

   const handleLaunch = () => {
      const slug = slides[currentSlide].route.replace('/apps/', '').replace('/app/', '');
      router.push(`/apps/${slug}`);
   }

   return (
      <div className={`h-screen w-full overflow-hidden transition-colors duration-500`}>
         <div className="absolute h-screen inset-0 bg-black opacity-80 pointer-events-none z-0"></div>

         <div className="relative h-full w-full">
            <div className="overflow-hidden h-full" ref={emblaRef}>
               <div className="flex h-full">
                  {slides.map((slide, index) => (
                     <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                        <div className="h-full w-full">
                           <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full h-full object-cover"
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="absolute bottom-8 left-0 w-full px-4 md:px-30 z-20">
               <div className="flex md:flex-row flex-col items-center md:justify-between md:items-center gap-4">
                  <div className="text-white uppercase">
                     <div className="flex justify-center md:justify-start">
                        <p className="text-xs inline-block px-3 py-1 bg-white/30 rounded-lg">{slides[currentSlide].tag}</p>
                     </div>
                     <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl md:text-left text-center">{slides[currentSlide].title}</h2>
                     <p className="text-xs sm:text-sm pt-2 pb-4 md:pb-8 max-w-6xl md:text-left text-center">{slides[currentSlide].description}</p>
                     <div className="relative w-fit button-hover flex justify-center group mx-auto md:mx-0">
                        <span className="ping-button"></span>
                        <span className="ping-button-2"></span>
                        <button onClick={handleLaunch} className="px-3 py-2 md:px-8 md:py-3 bg-white text-xs md:text-sm border-2 hover:border-4 transition-all duration-300 border-[#00EE7D] bg-white text-black rounded-xl uppercase">
                           <div className="relative overflow-hidden">
                              <div className="transition-transform duration-500 group-hover:-translate-y-full">
                                 Launch
                              </div>
                              <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                                 Launch
                              </div>
                           </div>
                        </button>
                     </div>
                  </div>

                  <div className="flex flex-col items-center md:items-end gap-4">
                     <Link href="/apps">
                        <span className="group text-xs uppercase text-gray-300 flex items-center gap-1">
                           Browse all apps
                           <FaPlay className="h-3 w-3 ml-1 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                     </Link>
                     <div className="flex gap-2 md:gap-4">
                        {slides.map((slide, index) => (
                           <img
                              key={index}
                              src={slide.image}
                              alt={`Thumbnail ${slide.title}`}
                              className={`object-cover opacity-60 bg-cover bg-center border-3 rounded-lg w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 cursor-pointer ${index === currentSlide ? 'border-[#00EE7D] opacity-100' : 'border-transparent'}`}
                              onClick={() => handleThumbnailClick(index)}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-2 md:gap-4">
               <button
                  onClick={scrollPrev}
                  className="p-4 md:p-6 rounded-full border-3 border-[#00EE7D] hover:scale-105 transition-all duration-300 text-white"
                  aria-label="Previous slide"
               >
                  <FaPlay size={10} className="md:w-3 md:h-3" />
               </button>
               <button
                  onClick={scrollNext}
                  className="p-4 md:p-6 rounded-full border-3 border-[#00EE7D] hover:scale-105 transition-all duration-300 text-white"
                  aria-label="Next slide"
               >
                  <FaPlay size={10} className="md:w-3 md:h-3" />
               </button>
            </div>
         </div>
      </div>
   )
}