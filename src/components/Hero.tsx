'use client'

import React, { useState } from "react"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi" // Import icons

const slides = [
   {
      title: 'CAMELOT',
      description: 'The largest NFT marketplace & Runes platform',
      buttonText: 'Launch',
      image: '/images/app1.jpg',
      bg: 'bg-red-500'
   },
   {
      title: 'DISCOVER',
      description: 'Explore rare digital assets powered by EcoChain',
      buttonText: 'Explore',
      image: '/images/app2.jpg',
      bg: 'bg-blue-500'
   },
   {
      title: 'CREATE',
      description: 'Mint, sell, and grow your Web3 presence with powerful tools',
      buttonText: 'Start Building',
      image: '/images/app1.jpg',
      bg: 'bg-green-500'
   },
   {
      title: 'COLLECTIONS',
      description: 'Explore rare digital assets powered by EcoChain',
      buttonText: 'Explore',
      image: '/images/app2.jpg',
      bg: 'bg-yellow-500'
   },
   {
      title: 'BUILD',
      description: 'Mint, sell, and grow your Web3 presence with powerful tools',
      buttonText: 'Start Building',
      image: '/images/app1.jpg',
      bg: 'bg-purple-500'
   },
];

const carousel: KeenSliderPlugin = (slider) => {
   const z = 1200 // Increased from 600 to accommodate larger size
   function rotate() {
      const deg = 360 * slider.track.details.progress
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
   }
   slider.on("created", () => {
      const deg = 360 / slider.slides.length
      slider.slides.forEach((element, idx) => {
         element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
      })
      rotate()
   })
   slider.on("detailsChanged", rotate)
}

export default function Hero() {
   const [currentSlide, setCurrentSlide] = useState(0)
   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
      {
         loop: true,
         selector: ".carousel__cell",
         renderMode: "custom",
         mode: "free-snap",
         initial: 0,
         slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
         },
      },
      [
         carousel,
         (slider) => {
            let timeout: NodeJS.Timeout
            let mouseOver = false
            function clearNextTimeout() {
               clearTimeout(timeout)
            }
            function nextTimeout() {
               clearTimeout(timeout)
               if (mouseOver) return
               timeout = setTimeout(() => {
                  slider.next()
               }, 3000)
            }
            slider.on("created", () => {
               slider.container.addEventListener("mouseover", () => {
                  mouseOver = true
                  clearNextTimeout()
               })
               slider.container.addEventListener("mouseout", () => {
                  mouseOver = false
                  nextTimeout()
               })
               nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
         },
      ]
   )

   const handleThumbnailClick = (index: number) => {
      instanceRef.current?.moveToIdx(index)
   }

   const currentBg = slides[currentSlide].bg;

   return (
      <div className={`h-screen w-full overflow-hidden ${currentBg} transition-colors duration-500`}>
         <div className="absolute inset-0 bg-black opacity-80"></div>
         <div className="wrapper z-10">
            <div className="scene w-[1500px] h-[1200px]"> {/* Increased from 1000x800 */}
               <div className="carousel keen-slider" ref={sliderRef}>
                  {slides.map((slide, index) => (
                     <div key={index} className="carousel__cell w-[1470px] h-[900px]"> {/* Wider aspect ratio */}
                        <div className="slide-content">
                           <img src={slide.image} alt={slide.title} className="slide-image" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="z-20 rotate-z-[6deg] absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start">
               <div className="absolute bottom-10 left-40 text-white">
                  <h2 className="text-9xl">{slides[currentSlide].title}</h2>
                  <p className="text-sm uppercase pt-2 pb-8">{slides[currentSlide].description}</p>
                  <button className="px-4 py-2 text-sm border-3 border-[#00EE7D] bg-white text-black rounded-xl uppercase">
                     {slides[currentSlide].buttonText}
                  </button>
               </div>
               <div className="absolute flex gap-4 bottom-10 right-40">
                  {slides.map((slide, index) => (
                     <img
                        key={index}
                        src={slide.image}
                        alt={`Thumbnail ${slide.title}`}
                        className={`object-cover opacity-60 bg-cover bg-center border-3 rounded-lg w-12 h-12 ${index === currentSlide ? 'border-[#00EE7D] opacity-100' : 'border-transparent'}`}
                        onClick={() => handleThumbnailClick(index)}
                     />
                  ))}
               </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute rotate-z-[6deg] right-10 top-2/3 transform -translate-y-1/2 z-30 flex flex-col gap-4">
               <button
                  onClick={() => instanceRef.current?.prev()}
                  className="p-3 rounded-full border-3 hover:bg-[#00EE7D]/70 transition-all duration-300 text-white"
                  aria-label="Previous slide"
               >
                  <FiChevronLeft size={24} />
               </button>
               <button
                  onClick={() => instanceRef.current?.next()}
                  className="p-3 rounded-full border-3 hover:bg-[#00EE7D]/70 transition-all duration-300 text-white"
                  aria-label="Next slide"
               >
                  <FiChevronRight size={24} />
               </button>
            </div>
         </div>

         <style jsx>{`        
            .wrapper {
               display: flex;
               justify-content: center;
               align-items: center;
               transform: rotateZ(-6deg);
               position: relative;
               height: 100vh;
               width: 100vw;
            }
            
            .scene {
               width: 1500px; /* Increased from 800px */
               height: 1200px; /* Increased from 600px */
               perspective: 4000px; /* Increased perspective */
               position: relative;
               margin: 0 auto;
            }
            
            .scene .carousel.keen-slider {
               width: 100%;
               height: 100%;
               overflow: visible;
               position: absolute;
               transform: translateZ(-1200px); /* Increased from -800px */
               transform-style: preserve-3d;
            }
            
            .carousel__cell {
               position: absolute;
               width: 1470px; /* Increased from 780px */
               left: 15px; /* Slightly increased */
               height: 900px; /* Now wider aspect ratio (1470/900 = 1.63:1) */
            }
            
            .slide-content {
               width: 100%;
               height: 100%;
            }
            
            .slide-image {
               width: 100%;
               height: 100%;
               object-fit: cover;
            }
         `}</style>
      </div>
   )
}