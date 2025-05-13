'use client'

import React, { useState } from "react"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

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
   const z = 1020 // Reduced by 15% from 1200
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
         <div className="absolute h-screen inset-0 bg-black opacity-80 pointer-events-none z-0"></div>
         <div className="wrapper">
            <div className="scene w-full md:w-[1275px] h-[1020px] z-10">
               <div className="carousel keen-slider mt-16" ref={sliderRef}>
                  {slides.map((slide, index) => (
                     <div key={index} className="carousel__cell w-[1250px] h-[765px]">
                        <div className="slide-content">
                           <img src={slide.image} alt={slide.title} className="slide-image" />
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="z-20 rotate-z-[6deg] absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start pointer-events-auto">
               <div className="hero-bottom-content flex md:flex-row flex-col md:justify-between md:items-center p-4 md:p-8 w-full">
                  <div className="hero-info">
                     <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl">{slides[currentSlide].title}</h2>
                     <p className="text-xs sm:text-sm uppercase pt-2 pb-4 md:pb-8">{slides[currentSlide].description}</p>
                     <div className="relative w-fit button-hover flex justify-center group mx-auto md:mx-0">
                        <span className="ping-button"></span>
                        <span className="ping-button-2"></span>
                        <button className="px-3 py-2 md:px-4 md:py-3 bg-white text-xs md:text-sm border-2 hover:border-4 transition-all duration-300 border-[#00EE7D] bg-white text-black rounded-xl uppercase">
                           <div className="relative overflow-hidden">
                              <div className="transition-transform duration-500 group-hover:-translate-y-full">
                                 explore
                              </div>
                              <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                                 explore
                              </div>
                           </div>
                        </button>
                     </div>
                  </div>
                  <div className="hero-thumbnails pr-8">
                     {slides.map((slide, index) => (
                        <img
                           key={index}
                           src={slide.image}
                           alt={`Thumbnail ${slide.title}`}
                           className={`object-cover opacity-60 bg-cover bg-center border-3 rounded-lg w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${index === currentSlide ? 'border-[#00EE7D] opacity-100' : 'border-transparent'}`}
                           onClick={() => handleThumbnailClick(index)}
                        />
                     ))}
                  </div>
               </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute rotate-z-[6deg] right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-2 md:gap-4">
               <button
                  onClick={() => instanceRef.current?.prev()}
                  className="p-2 md:p-3 rounded-full border-3 hover:bg-[#00EE7D]/70 transition-all duration-300 text-white"
                  aria-label="Previous slide"
               >
                  <FiChevronLeft size={18} className="md:w-6 md:h-6" />
               </button>
               <button
                  onClick={() => instanceRef.current?.next()}
                  className="p-2 md:p-3 rounded-full border-3 hover:bg-[#00EE7D]/70 transition-all duration-300 text-white"
                  aria-label="Next slide"
               >
                  <FiChevronRight size={18} className="md:w-6 md:h-6" />
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
               width: 85%;
               max-width: 1275px; /* Reduced by 15% from 1500px */
               height: 85vh;
               max-height: 1020px; /* Reduced by 15% from 1200px */
               perspective: 3400px; /* Reduced by 15% from 4000px */
               position: relative;
               margin: 0 auto;
            }
            
            .scene .carousel.keen-slider {
               width: 100%;
               height: 100%;
               overflow: visible;
               position: absolute;
               transform: translateZ(-1020px); /* Reduced by 15% from 1200px */
               transform-style: preserve-3d;
            }
            
            .carousel__cell {
               position: absolute;
               width: 90%;
               max-width: 1250px; /* Reduced by 15% from 1470px */
               left: 5%;
               height: 85%;
               max-height: 765px; /* Reduced by 15% from 900px */
               pointer-events: auto;
            }
            
            .slide-content {
               width: 100%;
               height: 100%;
               pointer-events: auto;
            }
            
            .slide-image {
               width: 100%;
               height: 100%;
               object-fit: cover;
            }

            .hero-bottom-content {
               position: absolute;
               bottom: 10px;
               left: 1rem;
               color: white;
            }
            .hero-info {
               text-align: left;
            }
            .hero-thumbnails {
               display: flex;
               gap: 0.5rem;
               justify-content: flex-start;
            }
            @media (max-width: 768px) {
               .hero-bottom-content {
                  left: 0;
                  right: 0;
                  width: 100vw;
                  align-items: center;
                  text-align: center;
                  bottom: 1.5rem;
               }
               .hero-info {
                  width: 100%;
                  text-align: center;
                  align-items: center;
                  justify-content: center;
                  display: flex;
                  flex-direction: column;
               }
               .hero-thumbnails {
                  justify-content: center;
                  width: 100%;
                  margin-top: 1.5rem;
                  margin-bottom: 0.5rem;
               }
            }

            @media (max-width: 480px) {
               .wrapper {
                  transform: rotateZ(-1deg);
               }
               .z-20 {
                  transform: rotateZ(1deg);
               }
            }
         `}</style>
      </div>
   )
}