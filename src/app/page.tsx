import About from "@/components/About";
import DifferenceSection from "@/components/DifferenceSection";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import MyceliumApps from "@/components/MyceliumApps";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <Hero />
      <About />
      <Slider />
      <DifferenceSection />
      <MyceliumApps />
    </div>
  );
}
