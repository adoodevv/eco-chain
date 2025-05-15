'use client'
import React from 'react'
import { IoMdClose } from "react-icons/io";

const CloseButton = () => {
   return (
      <button
         onClick={() => window.history.back()}
         className="absolute bottom-16 left-1/2 -translate-x-1/2 text-gray-400 hover:scale-105 transition-all duration-300 text-2xl p-4 rounded-full border border-[#00EE7D]"
      >
         <IoMdClose />
      </button>
   )
}

export default CloseButton
