import CloseButton from '@/components/CloseButton';
import { apps } from '@/constants/apps';
import Link from 'next/link';
import React from 'react';

export default function AppDetailPage({ params }: { params: { slug: string } }) {
   const app = apps.find(
      (a) => a.route.replace('/apps/', '').replace('/app/', '') === params.slug
   );

   if (!app) return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
         <h1 className="text-3xl">App not found</h1>
      </div>
   );

   return (
      <div className="min-h-screen relative flex items-center justify-center bg-radial from-[#00EE7D] to-black px-4">
         <div className="absolute h-screen inset-0 bg-black blur-2xl opacity-80 pointer-events-none z-0"></div>
         <div className="flex flex-col md:flex-row items-center p-8 gap-8 z-10">
            <div className="rounded-2xl md:w-1/2 overflow-hidden flex items-center justify-center">
               <img src={app.image} alt={app.title} className="object-cover md:w-[75%] h-auto rounded-xl" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start text-white md:w-1/2">
               <span className="bg-white/10 text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-2 text-white">{app.tag}</span>
               <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">{app.title}</h1>
               <p className="text-base md:text-lg mb-6 text-gray-300 max-w-xl">{app.description}</p>
               <div className="relative w-fit button-hover flex justify-center group mx-auto md:mx-0">
                  <span className="ping-button"></span>
                  <span className="ping-button-2"></span>
                  <Link href={app.link} target="_blank" rel="noopener noreferrer" className="px-3 py-2 md:px-4 md:py-3 bg-white text-xs md:text-sm border-2 hover:border-4 transition-all duration-300 border-[#00EE7D] bg-white text-black rounded-xl uppercase">
                     <div className="relative overflow-hidden">
                        <div className="transition-transform duration-500 group-hover:-translate-y-full">
                           Launch
                        </div>
                        <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                           Launch
                        </div>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
         <CloseButton />
      </div>
   );
} 