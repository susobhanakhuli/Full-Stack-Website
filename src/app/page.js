import HeroSection from "./components/Herosection";
import Crousal from "./components/Crousal";
import Inspire from "./components/Inspire";

export default function Home() {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <Crousal />
      </section>
      <section>
        <Inspire />
      </section>
    </div>
  );
}
