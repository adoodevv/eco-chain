import React from 'react';

interface AppCardProps {
   app: {
      title: string;
      description: string;
      tag: string;
      image: string;
   };
   large?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ app, large = false }) => (
   <div className="flex flex-col">
      <div className={`relative rounded-lg border-2 hover:border-4 transition-all duration-300 border-[#032a1c] w-full ${large ? 'h-[41rem]' : 'h-[20rem]'}`}>
         <div className="relative w-full h-full overflow-hidden">
            <img
               src={app.image}
               alt={app.title}
               className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all duration-300"
            />
            <span className="absolute bottom-3 left-3 bg-white/10 text-white text-xs uppercase px-3 py-1 rounded-lg backdrop-blur-sm">
               {app.tag}
            </span>
         </div>
      </div>
      <div className="mt-4 text-white">
         <h1 className="text-2xl md:text-4xl uppercase manuka-bold">{app.title}</h1>
      </div>
   </div>
);

export default AppCard; 