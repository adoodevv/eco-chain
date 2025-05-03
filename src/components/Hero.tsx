import HeroCarousel from "./HeroCarousel"


const Hero = () => {
   return (
      <div className="bg-[url('/images/hero.png')] bg-cover bg-center flex flex-col justify-center py-20 h-screen">
         <HeroCarousel />
      </div>
   )
}

export default Hero
