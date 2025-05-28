'use client'
import Image from 'next/image'

const Partners = () => {
   const partners = [
      { name: 'ZNS Connect', logo: '/logos/zns-connect.png' },
      { name: 'UNICEF', logo: '/logos/unicef.png' },
      { name: 'Polymer', logo: '/logos/polymer.svg' },
      { name: 'Othentic', logo: '/logos/othentic.png' },
      { name: 'Avail', logo: '/logos/avail.png' },
      { name: 'Eigen Layer', logo: '/logos/eigen-layer.png' },
      { name: 'Quicknode', logo: '/logos/quicknode.png' },
   ]

   return (
      <div className="py-16 px-8 max-w-7xl mx-auto">
         <h2 className="uppercase text-white text-center mb-12 text-5xl lg:text-9xl">Our Partners</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-items-center">
            {partners.map((partner) => (
               <div
                  key={partner.name}
                  className="w-full max-w-[200px] h-20 flex items-center justify-center transition-transform duration-300 hover:scale-105"
               >
                  <Image
                     src={partner.logo}
                     width={400}
                     height={400}
                     alt={`${partner.name} logo`}
                     className="max-w-full max-h-full object-contain filter grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  />
               </div>
            ))}
            <Image
               src="/logos/lucid.png"
               width={100}
               height={100}
               alt="Lucid logo"
               className="max-w-full max-h-full rounded-full object-contain filter grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            />
         </div>
      </div>
   )
}

export default Partners
