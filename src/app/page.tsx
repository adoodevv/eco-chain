import About from "@/components/About";
import DifferenceSection from "@/components/DifferenceSection";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import MyceliumApps from "@/components/MyceliumApps";
import Hero3D from "@/components/Hero3D";
import Partners from "@/components/Partners";
export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <Hero3D />
      <Partners />
      <About />
      <Slider />
      <DifferenceSection />
      <MyceliumApps />
    </div>
  );
}
