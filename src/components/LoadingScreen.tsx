'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
   }, []);

   if (!isLoading) return null;

   return (
      <motion.div
         initial={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
         <div className="flex flex-col items-center space-y-4">
            <motion.div
               initial={{ scale: 0.5, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{
                  duration: 0.5,
                  ease: "easeOut"
               }}
            >
               <Image
                  src="/logo.png"
                  alt="Logo"
                  width={500}
                  height={500}
                  className="object-contain"
               />
            </motion.div>

            <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease: "easeOut"
               }}
            >
               <h1 className="text-9xl font-bold text-white uppercase">
                  Mycelium
               </h1>
            </motion.div>

            <motion.div
               className="w-32 h-1 bg-white/20 rounded-full overflow-hidden"
               initial={{ width: 0 }}
               animate={{ width: 128 }}
               transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
               }}
            >
               <motion.div
                  className="h-full bg-[#00EE7D]"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                     duration: 1.5,
                     ease: "easeInOut",
                     repeat: Infinity,
                     repeatType: "reverse"
                  }}
               />
            </motion.div>
         </div>
      </motion.div>
   );
};

export default LoadingScreen; 