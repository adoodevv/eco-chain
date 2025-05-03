import Image from 'next/image'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
        <Image
          alt='blocks'
          src='/images/blocks.png'
          width={500}
          height={500}
          className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="max-w-3xl p-4 sm:p-6 md:p-8 lg:p-12">
          <h1 className="poppins-h1 text-[32px] sm:text-[40px] md:text-[52px] lg:text-[68px] mb-4 sm:mb-6">
            About EcoChain
          </h1>
          <p className="poppins-heading text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
