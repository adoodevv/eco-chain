import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";

const apps = [
   {
      title: 'App name',
      description: 'one line description',
      tag: 'Sustainability',
      image: '/images/app1.jpg',
   },
   {
      title: 'App name',
      description: 'one line description',
      tag: 'Green tech',
      image: '/images/app2.jpg',
   },
   {
      title: 'App name',
      description: 'one line description',
      tag: 'Sustainability',
      image: '/images/app1.jpg',
   },
   {
      title: 'App name',
      description: 'one line description',
      tag: 'Finance',
      image: '/images/app2.jpg',
   },
   {
      title: 'App name',
      description: 'one line description',
      tag: 'Climate',
      image: '/images/app1.jpg',
   },
   {
      title: 'App name',
      description: 'one line description',
      tag: 'Sustainability',
      image: '/images/app2.jpg',
   },
];

const EcoChainApps = () => {
   return (
      <section className="bg-gradient-to-br from-[#032a1c] via-black to-[#032a1c] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-10">
               <h2 className="text-[40px] sm:text-[52px] md:text-[68px] poppins-h1 font-bold text-white">EcoChain Apps</h2>
               <Link href="/apps">
                  <span className="group text-[18px] sm:text-[20px] md:text-[22px] pretendard-p text-gray-300 flex items-center gap-1">
                     Browse all apps
                     <FaChevronRight className="h-3 w-3 ml-1 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
               </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
               {apps.map((app, idx) => (
                  <div key={idx} className="">
                     <div className="rounded-lg overflow-hidden shadow-md">
                        <div className="relative w-full h-48 sm:h-56 md:h-64">
                           <img
                              src={app.image}
                              alt={app.title}
                              className="w-full h-full object-cover"
                           />
                           <span className="absolute bottom-2 left-2 bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                              {app.tag}
                           </span>
                        </div>
                     </div>
                     <div className="py-3 sm:py-4 text-white">
                        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] poppins-h1">{app.title}</h3>
                        <p className="text-[16px] sm:text-[18px] poppins-heading text-gray-400">{app.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default EcoChainApps;
