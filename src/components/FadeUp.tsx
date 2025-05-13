'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react';

const FadeUpAnimation = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => {
   return (
      <motion.div
         className={className}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay }}
      >
         {children}
      </motion.div>
   )
}

export default FadeUpAnimation