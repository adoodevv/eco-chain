'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
   const [openDropdown, setOpenDropdown] = useState<keyof DropdownMenus | null>(null);

   const dropdownMenus = {
      build: [
         { title: "Ecosystem Fund", href: "/blog/slug1" },
         { title: "Docs", href: "/blog/slug2" },
         { title: "Mainnet Hub", href: "/blog/slug3" },
         { title: "Testnet Hub", href: "/blog/slug4" },
         { title: "Block Explorer", href: "/blog/slug5" },
         { title: "EcoChain Portal", href: "/blog/slug6" },
      ],
   };

   type DropdownKey = keyof typeof dropdownMenus;

   interface DropdownMenu {
      title: string;
      href: string;
   }

   interface DropdownMenus {
      build: DropdownMenu[];
   }

   const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
   };

   const handleMouseEnter = (dropdown: DropdownKey) => {
      setActiveDropdown(dropdown);
   };

   const handleMouseLeave = () => {
      setActiveDropdown(null);
   };

   const toggleDropdown = (key: keyof DropdownMenus) => {
      setOpenDropdown(openDropdown === key ? null : key);
   };

   return (
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 py-4 bg-black text-white">
         <div className="flex items-center">
            {/* <Image
               src="/logo.png"
               alt="Logo"
               width={50}
               height={50}
               className="mr-2"
            /> */}
            <Link href='/' className="text-[20px] sm:text-[24px] text-[#00EE7D] poppins-logo">EcoChain</Link>
         </div>
         <nav className="hidden md:flex">
            <ul className="flex space-x-8 lg:space-x-[120px] text-[16px] lg:text-[18px] poppins-nav">
               <li>
                  <Link href="/" className="text-white flex items-center gap-1 rounded-md px-4 py-2 hover:bg-white/10 transition-all">
                     Explore
                  </Link>
               </li>
               <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("build")}
                  onMouseLeave={handleMouseLeave}
               >
                  <span className="cursor-pointer group text-white flex items-center rounded-md px-4 py-2 hover:bg-white/10 transition-all">
                     Build
                     <FaChevronRight className={`h-3 w-3 transition-transform ${activeDropdown === "build" ? "rotate-90" : ""} duration-300 ml-2`} />
                  </span>
                  {activeDropdown === "build" && (
                     <div className="absolute top-full left-0 w-48 py-2 z-50">
                        {dropdownMenus.build.map((item) => (
                           <Link
                              key={item.href}
                              href={item.href}
                              className="block text-white px-4 py-3 text-sm bg-black rounded-md mb-2 hover:shadow-md shadow-[#0CD57633] transition-all"
                           >
                              {item.title}
                           </Link>
                        ))}
                     </div>
                  )}
               </li>
               <li>
                  <Link href="/bridge" className="text-white flex items-center gap-1 rounded-md px-4 py-2 hover:bg-white/10 transition-all">
                     Bridge
                  </Link>
               </li>
            </ul>
         </nav>

         <div className="hidden md:block">
         </div>

         <div className="md:hidden">
            <HiOutlineMenuAlt3 className="h-8 w-8 text-white" onClick={toggleMobileMenu} />
         </div>

         {mobileMenuOpen && <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"></div>}
         {mobileMenuOpen && (
            <div className="fixed top-0 right-0 w-[280px] sm:w-[320px] h-full bg-black text-white z-50 shadow-lg overflow-y-auto">
               <div className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6">
                  <Link href="/">
                     {/* <Image
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="inline-block"
                     /> */}
                     <p className="text-[20px] sm:text-[24px] text-[#00EE7D] poppins-logo">EcoChain</p>
                  </Link>
                  <button onClick={toggleMobileMenu} className="text-2xl rounded-full p-2 bg-white/10">
                     <AiOutlineClose />
                  </button>
               </div>
               <ul className="mt-8 sm:mt-10 text-base sm:text-lg px-4 sm:px-6">
                  <li className="mb-4">
                     <Link href="/" className="text-white flex items-center px-4 py-4 border-b border-white/10">
                        Explore
                     </Link>
                  </li>
                  <li className="mb-4">
                     <Link href="/bridge" className="text-white flex items-center px-4 py-4 border-b border-white/10">
                        Bridge
                     </Link>
                  </li>
                  <li
                     className="relative mb-4"
                     onClick={() => toggleDropdown("build")}
                  >
                     <span className="cursor-pointer group text-white flex items-center px-4 py-4 border-b border-white/10">
                        Build
                        <FaChevronRight className={`h-3 w-3 transition-transform ${openDropdown === "build" ? "rotate-90" : ""} duration-300 ml-2`} />
                     </span>
                     {openDropdown === "build" && (
                        <div className="absolute top-full left-0 w-full py-2 z-50 bg-black">
                           {dropdownMenus.build.map((item) => (
                              <Link
                                 key={item.href}
                                 href={item.href}
                                 className="block text-white px-4 py-3 text-sm rounded-md mb-2 hover:shadow-md shadow-[#0CD57633] transition-all"
                              >
                                 {item.title}
                              </Link>
                           ))}
                        </div>
                     )}
                  </li>
               </ul>
            </div>
         )}
      </div>
   )
}

export default Navbar
