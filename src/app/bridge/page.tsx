'use client'

import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { SiEthereum } from 'react-icons/si';
import { MdOutlineSwapVert } from 'react-icons/md';

export default function BridgePage() {
   const [activeTab, setActiveTab] = useState('Bridge');
   const [fromValue, setFromValue] = useState('0');
   const [toValue, setToValue] = useState('0');

   const tabs = ['Bridge', 'Swap', 'Onramp'];

   return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
         {/* Bridge Card */}
         <div className="container mx-auto flex justify-center px-4">
            <div className="relative w-full max-w-md bg-black border border-green-500/50 rounded-lg shadow-lg overflow-hidden">
               {/* Card Title */}
               <div className="pt-6 pb-4 text-center">
                  <h2 className="poppins-h1 text-xl font-medium text-green-400">Eco Portal</h2>
               </div>

               {/* Tabs */}
               <div className="flex border-b border-gray-800">
                  {tabs.map((tab) => (
                     <button
                        key={tab}
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${activeTab === tab
                           ? 'bg-gradient-to-r from-green-600 to-green-500 text-white'
                           : 'text-gray-400 hover:text-white'
                           }`}
                        onClick={() => setActiveTab(tab)}
                     >
                        {tab}
                     </button>
                  ))}
               </div>

               {/* Card Content */}
               <div className="p-5">
                  {/* From Field */}
                  <div className="mb-2">
                     <div className="text-sm text-gray-400 mb-1">From :</div>
                     <div className="relative flex items-center bg-gray-900 rounded-lg p-6">
                        <input
                           type="text"
                           value={fromValue}
                           onChange={(e) => setFromValue(e.target.value)}
                           className="flex-1 bg-transparent text-2xl outline-none"
                        />
                        <div className="absolute right-3">
                           <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 rounded-full px-3 py-2">
                              <SiEthereum size={16} className="text-white" />
                              <span>ECO</span>
                              <FaAngleDown size={14} className="text-gray-400" />
                           </button>
                        </div>
                     </div>
                     <div className="flex justify-between text-sm text-gray-400 mt-1 px-1">
                        <span>$0</span>
                        <span>Balance: 0 <span className="text-green-400">MAX</span></span>
                     </div>
                  </div>

                  {/* Swap Icon */}
                  <div className="flex justify-center -my-2 relative z-10">
                     <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                        <MdOutlineSwapVert size={24} className="text-black" />
                     </div>
                  </div>

                  {/* To Field */}
                  <div className="mb-4">
                     <div className="text-sm text-gray-400 mb-1">To :</div>
                     <div className="relative flex items-center bg-gray-900 rounded-lg p-6">
                        <input
                           type="text"
                           value={toValue}
                           onChange={(e) => setToValue(e.target.value)}
                           className="flex-1 bg-transparent text-2xl outline-none"
                        />
                        <div className="absolute right-3">
                           <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 rounded-full px-3 py-2">
                              <SiEthereum size={16} className="text-white" />
                              <span>ECO</span>
                              <FaAngleDown size={14} className="text-gray-400" />
                           </button>
                        </div>
                     </div>
                     <div className="flex justify-between text-sm text-gray-400 mt-1 px-1">
                        <span>$0</span>
                        <span>Balance: 0</span>
                     </div>
                  </div>

                  {/* Fees */}
                  <div className="flex items-center justify-between mb-3 text-sm">
                     <span className="text-gray-400">Fees:</span>
                     <button className="flex items-center space-x-1 bg-transparent text-white">
                        <span>$0</span>
                        <FaAngleDown size={12} className="text-gray-400" />
                     </button>
                  </div>

                  {/* Max Slippage */}
                  <div className="flex items-center justify-between mb-5 text-sm">
                     <span className="text-gray-400">Max slippage:</span>
                     <button className="flex items-center space-x-1 bg-transparent text-white">
                        <span>1% Auto</span>
                        <FaAngleDown size={12} className="text-gray-400" />
                     </button>
                  </div>

                  {/* Connect Wallet Button */}
                  <button className="w-full bg-linear-to-r from-[#96FEB4] via-[#1BDE63] to-[#00FFE6] text-black font-medium py-3 rounded-full transition-colors">
                     Connect Wallet
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}