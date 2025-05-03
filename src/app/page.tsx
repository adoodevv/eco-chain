import About from "@/components/About";
import DifferenceSection from "@/components/DifferenceSection";
import EcoChainApps from "@/components/EcoChainApps";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <Hero />
      <About />
      <Slider />
      <DifferenceSection />
      <EcoChainApps />
    </div>
  );
}
