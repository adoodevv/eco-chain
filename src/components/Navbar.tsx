'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { BurgerIcon, CloseIcon, PlusIcon } from "@/constants/Icons"
import Image from "next/image"

const Navbar = () => {
   const pathname = usePathname()
   const isHomePage = pathname === '/'

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [expandedItem, setExpandedItem] = useState<string | null>(null);
   const [activeDesktopItem, setActiveDesktopItem] = useState<string | null>(null);
   const [isHovering, setIsHovering] = useState(false);
   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [hasScrolled, setHasScrolled] = useState(false);

   const menuItems = [
      {
         id: 'build',
         title: 'Build',
         submenu: [
            { title: 'Ecosystem Fund', href: 'https://ecofundme.com' },
            { title: 'Docs', href: '/blog/slug2' },
            { title: 'Mainnet Hub', href: 'https://mycelium-docs.pages.dev/docs/tools/rpc' },
            { title: 'Testnet Hub', href: 'https://explorer.myceliumlabs.xyz/' },
            { title: 'Block Explorer', href: 'https://explorer.myceliumlabs.xyz/' },
            { title: 'Mycelium Portal', href: '/apps' },
         ]
      },
   ];

   const handleMobileItemClick = (itemId: string): void => {
      setExpandedItem(expandedItem === itemId ? null : itemId);
   };

   const handleDesktopItemHover = (itemId: string): void => {
      setActiveDesktopItem(itemId);
      setIsHovering(true);
   };

   const handleDesktopItemLeave = (): void => {
      setIsHovering(false);
      setTimeout(() => {
         if (!isHovering) {
            setActiveDesktopItem(null);
         }
      }, 300);
   };

   const handleDropdownHover = (): void => {
      setIsHovering(true);
   };

   const handleDropdownLeave = (): void => {
      setIsHovering(false);
      setActiveDesktopItem(null);
   };

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;

         // Show navbar when scrolling up or at top
         if (currentScrollY < lastScrollY || currentScrollY < 10) {
            setIsNavbarVisible(true);
            setHasScrolled(currentScrollY > 10);
         }
         // Hide navbar when scrolling down past a threshold
         else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsNavbarVisible(false);
         }

         setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [lastScrollY]);

   return (
      <>
         <header
            className={`z-40 w-full h-24 md:h-[100px] flex items-center justify-between px-4 md:px-8 fixed top-0 transition-all duration-300 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"
               } ${isHomePage
                  ? (!hasScrolled && !activeDesktopItem)
                     ? "bg-none border-b border-white/20"
                     : "bg-black border-b border-white/20"
                  :
                  "bg-black border-b border-white/20"
               }`}
         >
            {/* Gradient overlay - only on homepage when not scrolled */}
            {isHomePage && (!hasScrolled && !activeDesktopItem) && (
               <div className="absolute inset-0 bg-gradient-to-b from-black to-black/0 w-full h-24 md:h-[100px]" />
            )}

            {/* Desktop menu */}
            <Link href='/' className="hidden md:flex items-center space-x-2 z-10">
               <Image
                  src='/logo.png'
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-16 w-16"
               />
               <h1 className="manuka-bold text-4xl text-[#00EE7D] poppins-logo uppercase">Mycelium</h1>
            </Link>

            <nav className="hidden md:flex items-center justify-center space-x-8 z-10">
               <ul className="flex items-center space-x-22 uppercase manuka-bold text-3xl">
                  <li>
                     <Link href="/" className="text-white hover:text-[#00EE7D] transition-all duration-300">
                        Explore
                     </Link>
                  </li>
                  {menuItems.map(item => (
                     <li
                        key={item.id}
                        onMouseEnter={() => handleDesktopItemHover(item.id)}
                        onMouseLeave={handleDesktopItemLeave}
                     >
                        <h2 className={`cursor-pointer text-white hover:text-[#00EE7D] transition-all duration-300`}>
                           {item.title}
                        </h2>
                     </li>
                  ))}
                  <li>
                     <Link href="/bridge" className="text-white hover:text-[#00EE7D] transition-all duration-300">
                        Bridge
                     </Link>
                  </li>
               </ul>
            </nav>

            {/* Not visible icon to make desktop menu centered */}
            <div className="hidden md:block opacity-0">
               <p className="text-5xl text-[#00EE7D] manuka-bold uppercase w-2"></p>
            </div>

            {/* Mobile menu button */}
            <button
               onClick={() => setIsMobileMenuOpen(true)}
               className="md:hidden group z-20 p-1.5 transition-colors duration-300 ease-in-out hover:bg-white/20 rounded"
               aria-label="Open menu button"
               id="hamburgerButton"
            >
               <BurgerIcon className="stroke-white stroke-2" />
            </button>

            {/* Logo - Mobile */}
            <Link href='/' className="md:hidden flex items-center space-x-2 z-10">
               <Image
                  src='/logo.png'
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-16 w-16"
               />
               <h1 className="manuka-bold text-4xl text-[#00EE7D] poppins-logo uppercase">Mycelium</h1>
            </Link>

            {/* Not visible logo to make logo centered on mobile */}
            <button
               className="md:hidden group z-20 p-1.5 transition-colors duration-300 ease-in-out hover:bg-white/20 rounded"
               aria-label="Placeholder button"
            >
               <BurgerIcon className="stroke-none stroke-2" />
            </button>
         </header>

         {/* Mobile menu with animation */}
         <AnimatePresence>
            {isMobileMenuOpen && (
               <motion.div
                  className="fixed inset-0 z-50 md:hidden bg-black min-h-screen overflow-y-auto w-screen flex flex-col"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
               >
                  {/* Header section */}
                  <div className="flex items-center justify-between border-b border-white/20 p-6">
                     <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2"
                     >
                        <CloseIcon className="group fill-[#00EE7D] h-[16px] w-[16px]" />
                        <span className="uppercase text-[#00EE7D] text-lg manuka-bold">Close</span>
                     </button>
                     <Link
                        href='/'
                        className="md:hidden flex items-center space-x-2 z-10"
                        onClick={() => setIsMobileMenuOpen(false)}
                     >
                        <Image
                           src='/logo.png'
                           alt="logo"
                           width={100}
                           height={100}
                           className="h-16 w-16"
                        />
                     </Link>
                     <div className="w-[68px]"></div>
                  </div>

                  {/* Menu items section */}
                  <div className="flex-1 flex flex-col p-6">
                     <ul className="space-y-2 manuka-bold text-6xl text-white">
                        <li>
                           <button className="w-full flex items-center justify-between py-2">
                              <Link
                                 href="/"
                                 className="uppercase"
                                 onClick={() => setIsMobileMenuOpen(false)}
                              >
                                 Explore
                              </Link>
                           </button>
                        </li>
                        {menuItems.map(item => (
                           <li key={item.id}>
                              <div className="flex items-center justify-between">
                                 <button
                                    className="w-full flex items-center justify-between py-2"
                                    onClick={() => handleMobileItemClick(item.id)}
                                 >
                                    <h2 className="uppercase">
                                       {item.title}
                                    </h2>
                                    <PlusIcon
                                       className={`transition-transform duration-300 ${expandedItem === item.id ? "rotate-45" : ""}`}
                                    />
                                 </button>
                              </div>
                              <AnimatePresence>
                                 {expandedItem === item.id && (
                                    <motion.ul
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: "auto", opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       transition={{ duration: 0.3 }}
                                       className="pl-4"
                                    >
                                       {item.submenu.map((subItem, index) => (
                                          <motion.li
                                             key={index}
                                             initial={{ x: -20, opacity: 0 }}
                                             animate={{ x: 0, opacity: 1 }}
                                             transition={{ delay: index * 0.15 }}
                                          >
                                             <Link
                                                href={subItem.href}
                                                className="text-3xl uppercase text-white"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                             >
                                                {subItem.title}
                                             </Link>
                                          </motion.li>
                                       ))}
                                    </motion.ul>
                                 )}
                              </AnimatePresence>
                           </li>
                        ))}
                        <li>
                           <button className="w-full flex items-center justify-between py-2">
                              <Link
                                 href="/bridge"
                                 className="uppercase"
                                 onClick={() => setIsMobileMenuOpen(false)}
                              >
                                 Bridge
                              </Link>
                           </button>
                        </li>
                     </ul>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         {/* Desktop dropdown menu */}
         <AnimatePresence>
            {activeDesktopItem && (
               <>
                  <motion.div
                     className="fixed flex items-center gap-4 top-24 left-0 w-full bg-linear-to-br from-[#D4FFE1]/50 via-[#9DFF8A]/50 to-[#07FF89]/80 z-40 px-4 md:px-6 pb-10 backdrop-blur-md"
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     onMouseEnter={handleDropdownHover}
                     onMouseLeave={handleDropdownLeave}
                  >
                     <h1 className="text-9xl md:text-[200px] lg:text-[270px] leading-tight uppercase text-white">{activeDesktopItem && menuItems.find(item => item.id === activeDesktopItem)?.title}</h1>
                     <div className="px-8 w-2/5">
                        <ul className="grid grid-flow-col grid-rows-4 gap-2">
                           {activeDesktopItem && menuItems.find(item => item.id === activeDesktopItem)?.submenu.map((subItem, index) => (
                              <motion.li
                                 key={index}
                                 initial={{ y: 20, opacity: 0 }}
                                 animate={{ y: 0, opacity: 1 }}
                                 transition={{ delay: index * 0.1 }}
                              >
                                 <Link href={subItem.href} className="text-3xl lg:text-5xl manuka-bold uppercase text-white hover:text-black/70 transition-all duration-300">{subItem.title}</Link>
                              </motion.li>
                           ))}
                        </ul>
                     </div>
                  </motion.div>
                  <motion.div
                     className="fixed inset-0 bg-black/20 z-30 backdrop-blur-xl"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onClick={handleDropdownLeave}
                  />
               </>
            )}
         </AnimatePresence>
      </>
   )
}

export default Navbar