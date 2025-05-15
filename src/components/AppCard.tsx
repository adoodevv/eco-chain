import { useRouter } from 'next/navigation';
import React from 'react';

interface AppCardProps {
   app: {
      title: string;
      description: string;
      tag: string;
      image: string;
      route: string;
   };
   large?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({ app, large = false }) => {
   const router = useRouter();
   const handleClick = () => {
      const slug = app.route.replace('/apps/', '').replace('/app/', '');
      router.push(`/apps/${slug}`);
   };

   return (
      <div className="flex flex-col cursor-pointer" onClick={handleClick}>
         <div className={`relative rounded-lg w-full ${large ? 'h-[41rem]' : 'h-[20rem]'}`}>
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
};

export default AppCard; 