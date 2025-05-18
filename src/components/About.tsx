import Image from 'next/image'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
        <Image
          alt='blocks'
          src='/logo.png'
          width={500}
          height={500}
          className="h-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="max-w-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-center md:text-left">
          <h1 className="uppercase text-5xl lg:text-9xl mb-4">
            About Mycelium
          </h1>
          <p className="uppercase text-sm leading-relaxed">
            Mycelium is a groundbreaking Layer 2 blockchain. We like to call it the Human Layer purpose-built
            for Regenerative Finance (ReFi) and Artificial Intelligence (AI) projects focused on a Greener Earth.
            We provide a suite of powerful tools that empower developers, climate projects, and DAOs to create applications
            that contribute to ecological restoration, circular economies, and transparent impact tracking—all while
            leveraging the scalability and affordability of rollups.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
