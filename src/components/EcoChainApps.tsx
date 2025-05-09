'use client';
import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const apps = [
   { title: 'Otherside', description: 'Web3 worlds', tag: 'Games', image: '/images/app1.jpg' },
   { title: 'Made by Apes', description: 'Builders club', tag: 'IP', image: '/images/app2.jpg' },
   { title: 'Camelot', description: 'DEX', tag: 'Finance', image: '/images/app1.jpg' },
   { title: 'Magic Eden', description: 'NFTs', tag: 'Collectibles', image: '/images/app2.jpg' },
   { title: 'APE Portal', description: 'Get on Apechain', tag: 'Infrastructure', image: '/images/app1.jpg' },
   { title: 'Blever', description: 'Launchpad', tag: 'Collectibles', image: '/images/app2.jpg' },
   { title: 'Apescan', description: 'Block explorer', tag: 'Infrastructure', image: '/images/app1.jpg' },
   { title: 'Otherside', description: 'Web3 worlds', tag: 'Games', image: '/images/app1.jpg' },
   { title: 'Made by Apes', description: 'Builders club', tag: 'IP', image: '/images/app2.jpg' },
   { title: 'Camelot', description: 'DEX', tag: 'Finance', image: '/images/app1.jpg' },
   { title: 'Magic Eden', description: 'NFTs', tag: 'Collectibles', image: '/images/app2.jpg' },
   { title: 'APE Portal', description: 'Get on Apechain', tag: 'Infrastructure', image: '/images/app1.jpg' },
];

interface App {
   title: string;
   description: string;
   tag: string;
   image: string;
}

const chunkApps = (apps: App[]) => {
   const chunks = [];
   for (let i = 0; i < apps.length; i += 5) {
      const group = apps.slice(i, i + 5);
      const grid = group.slice(0, 4);
      const solo = group[4];
      if (grid.length) chunks.push({ type: 'grid', items: grid });
      if (solo) chunks.push({ type: 'solo', items: [solo] });
   }
   return chunks;
};

const EcoChainApps = () => {
   const [sliderRef] = useKeenSlider<HTMLDivElement>({
      mode: 'free',
      slides: { perView: 'auto', spacing: 8 },
      renderMode: 'performance',
   });

   const chunks = chunkApps(apps);

   return (
      <section className="bg-gradient-to-br from-[#032a1c] via-black to-[#032a1c] py-8 md:py-28 overflow-hidden">
         <div className="mx-auto -mx-4 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-10">
               <h2 className="text-5xl lg:text-7xl uppercase text-white">EcoChain Apps</h2>
               <Link href="/apps">
                  <span className="group text-sm uppercase text-gray-300 flex items-center gap-1">
                     Browse all apps
                     <FaChevronRight className="h-3 w-3 ml-1 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
               </Link>
            </div>

            <div ref={sliderRef} className="keen-slider relative max-w-7xl mx-auto">
               {chunks.map((chunk, index) => {
                  if (chunk.type === 'grid') {
                     return (
                        <div
                           key={index}
                           className="keen-slider__slide min-w-[70vw] sm:min-w-[50vw] grid grid-cols-2 gap-4"
                        >
                           {chunk.items.map((app, idx) => (
                              <AppCard app={app} key={idx} />
                           ))}
                        </div>
                     );
                  } else {
                     const app = chunk.items[0];
                     return (
                        <div key={index} className="keen-slider__slide min-w-[70vw] sm:min-w-[50vw] flex items-stretch">
                           <AppCard app={app} large />
                        </div>
                     );
                  }
               })}
            </div>
         </div>
      </section>
   );
};

const AppCard = ({ app, large = false }: { app: any; large?: boolean }) => (
   <div className={`rounded-xl border-4 border-[#032a1c] overflow-hidden w-full ${large ? 'h-[41rem]' : 'h-[20rem]'}`}>
      <div className="relative w-full h-full">
         <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
         />
         <span className="absolute top-3 left-3 bg-white/10 text-white text-xs uppercase px-3 py-1 rounded-lg backdrop-blur-sm">
            {app.tag}
         </span>
         <div className="absolute bottom-3 left-3 text-white">
            <h1 className="text-2xl md:text-4xl uppercase">{app.title}</h1>
            <p className="text-sm uppercase">{app.description}</p>
         </div>
      </div>
   </div>
);

export default EcoChainApps;
