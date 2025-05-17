'use client'

import '@/utils/three-utils'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, RootState, ThreeEvent } from '@react-three/fiber'
import { Image, useTexture } from '@react-three/drei'
import { easing } from 'maath'
import { apps } from '@/constants/apps'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { FaPlay } from "react-icons/fa"

declare global {
   namespace JSX {
      interface IntrinsicElements {
         bentPlaneGeometry: {
            args?: [number, number, number, number, number];
            [key: string]: any;
         };
         meshSineMaterial: {
            map?: THREE.Texture;
            'map-anisotropy'?: number;
            'map-repeat'?: [number, number];
            side?: THREE.Side;
            toneMapped?: boolean;
            [key: string]: any;
         };
      }
   }
}

interface RigProps {
   onRotationChange?: (index: number) => void;
   rotation?: [number, number, number];
   targetRotation?: number;
   children?: React.ReactNode;
}

function Rig({ onRotationChange, targetRotation, children, ...props }: RigProps) {
   const ref = useRef<THREE.Group>(null)
   useFrame((state: RootState, delta: number) => {
      if (!ref.current) return

      if (targetRotation !== undefined) {
         const currentRotation = ref.current.rotation.y
         const diff = targetRotation - currentRotation
         if (Math.abs(diff) > 0.01) {
            ref.current.rotation.y += diff * 0.1
         }
      } else {
         ref.current.rotation.y -= delta * 0.05 // Default slow rotation
      }

      if (state.events?.update) {
         state.events.update()
      }
      easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta)
      state.camera.lookAt(0, 0, 0)

      const rotation = ref.current.rotation.y
      const slideIndex = Math.round((-rotation / (Math.PI * 2)) * 6) % 6
      onRotationChange?.(slideIndex)
   })
   return <group ref={ref} {...props}>{children}</group>
}

function Carousel({ radius = 2.0, count = 6 }) {
   const slides = apps.slice(0, count)
   return slides.map((slide, i) => (
      <Card
         key={i}
         url={slide.image}
         title={slide.title}
         description={slide.description}
         tag={slide.tag}
         position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
         rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      />
   ))
}

interface CardProps {
   url: string;
   title: string;
   description: string;
   tag: string;
   position: [number, number, number];
   rotation: [number, number, number];
}

interface CustomMaterial extends THREE.Material {
   radius?: number;
   zoom?: number;
}

function Card({ url, title, description, tag, ...props }: CardProps) {
   const ref = useRef<THREE.Mesh>(null)
   const [hovered, hover] = useState(false)
   const pointerOver = (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation()
      hover(true)
   }
   const pointerOut = () => hover(false)
   useFrame((state: RootState, delta: number) => {
      if (!ref.current) return
      easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
      const material = ref.current.material as CustomMaterial
      easing.damp(material, 'radius', 0, 0.2, delta)
      easing.damp(material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
   })
   return (
      <group scale={[-1, 1, 1]} {...props}>
         <Image
            ref={ref}
            url={url}
            transparent
            side={THREE.DoubleSide}
            onPointerOver={pointerOver}
            onPointerOut={pointerOut}
         >
            <bentPlaneGeometry args={[0.2, 1.5, 1, 20, 20]} />
         </Image>
      </group>
   )
}

export default function Hero3D() {
   const router = useRouter()
   const [currentSlide, setCurrentSlide] = useState(0)
   const [targetRotation, setTargetRotation] = useState<number | undefined>(undefined)
   const slides = apps.slice(0, 6)

   const handleLaunch = () => {
      const slug = slides[currentSlide].route.replace('/apps/', '').replace('/app/', '')
      router.push(`/apps/${slug}`)
   }

   const handleRotationChange = (index: number) => {
      setCurrentSlide((index + 6) % 6)
   }

   const handleThumbnailClick = (index: number) => {
      const targetAngle = -(index / 6) * Math.PI * 2
      setTargetRotation(targetAngle)
      setCurrentSlide(index)
   }

   const handleNextSlide = () => {
      const nextIndex = (currentSlide + 1) % 6
      const targetAngle = -(nextIndex / 6) * Math.PI * 2
      setTargetRotation(targetAngle)
      setCurrentSlide(nextIndex)
   }

   const handlePrevSlide = () => {
      const prevIndex = (currentSlide - 1 + 6) % 6
      const targetAngle = -(prevIndex / 6) * Math.PI * 2
      setTargetRotation(targetAngle)
      setCurrentSlide(prevIndex)
   }

   return (
      <div className="h-screen w-full bg-white overflow-hidden transition-colors duration-500">
         <div className="absolute h-screen inset-0 bg-black opacity-90 pointer-events-none z-0"></div>

         <div className="relative h-full w-full">
            <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
               <Rig rotation={[0, 0, 0.15]} onRotationChange={handleRotationChange} targetRotation={targetRotation}>
                  <Carousel />
               </Rig>
            </Canvas>

            {/* Navigation Buttons */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
               <button
                  onClick={handlePrevSlide}
                  className="md:w-16 md:h-16 w-12 h-12 rounded-full border-2 border-[#00EE7D] hover:scale-105 transition-all duration-300 flex items-center justify-center"
               >
                  <FaPlay className="h-2 w-2 text-white rotate-180" />
               </button>
               <button
                  onClick={handleNextSlide}
                  className="md:w-16 md:h-16 w-12 h-12 rounded-full border-2 border-[#00EE7D] hover:scale-105 transition-all duration-300 flex items-center justify-center"
               >
                  <FaPlay className="h-2 w-2 text-white" />
               </button>
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
                              className={`object-cover rounded-lg opacity-60 bg-cover bg-center border-3 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 cursor-pointer ${index === currentSlide ? 'border-[#00EE7D] opacity-100' : 'border-transparent'}`}
                              onClick={() => handleThumbnailClick(index)}
                           />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
} 