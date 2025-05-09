import Image from 'next/image';

const features = [
   {
      title: 'Transparency',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: <Image alt='icon' width={150} height={150} src='/images/magnifying-glass.png' className="h-10 w-10 text-green-400" />,
   },
   {
      title: 'Re-fi focused',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: <Image alt='icon' width={150} height={150} src='/images/circuit.png' className="h-10 w-10 text-green-400" />,
   },
   {
      title: 'Technology',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: <Image alt='icon' width={150} height={150} src='/images/atom.png' className="h-10 w-10 text-green-400" />,
   },
];

const DifferenceSection = () => {
   return (
      <section className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6">
         <div className="max-w-7xl mx-auto text-white">
            <h2 className="text-5xl lg:text-7xl uppercase font-bold mb-8 sm:mb-12 text-center">
               How is it different?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="card-hover relative uppercase border-4 border-[#032a1c] rounded-lg px-4 sm:px-6 py-8 sm:py-12 backdrop-blur-sm transition-all duration-300"
                  >
                     <span className="ping-border"></span>
                     <span className="ping-border" style={{ animationDelay: '0.6s' }}></span>
                     <div className="relative z-10">
                        <div className="mb-4">{feature.img}</div>
                        <h3 className="text-4xl md:text-5xl manuka-bold mb-2">{feature.title}</h3>
                        <p className="text-base text-gray-300 leading-relaxed">{feature.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default DifferenceSection;
