import Hero from "@/src/component/client/Hero";
import HappyEnvironment from "@/src/component/client/HappyEnvironment";
import Roadmap from "@/src/component/client/Roadmap";
import Journey from "@/src/component/client/Journey";
import Teachers from "@/src/component/client/Teachers";
import Testimonials from "@/src/component/client/Testimonials";
import News from "@/src/component/client/News";
import GradeSelector from "@/src/component/client/GradeSelector";

export default function Home() {
  return (
    <>
      <Hero />

      <Roadmap />
      <Journey />
      <HappyEnvironment />
      <Teachers />
      <Testimonials />
      <News />
      <GradeSelector />
    </>
  );
}
