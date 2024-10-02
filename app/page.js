import HomeImage from "./components/HomeImage";
import Offerings from "./components/Offerings";
import Testimonial from "./components/Testimonial";
import OngoingProjects from "./components/OngoingProjects";
import TrustFactorSection from"./components/TrustFactorSection";
import InteriorCafeProcess from "./components/InteriorCafeProcess";
import InteriorDesignGrid from "./components/InteriorDesignGrid";

export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <HomeImage />
      <Offerings />
      <InteriorDesignGrid />
      <TrustFactorSection />
      {/* <Testimonial /> */}
      {/* <OngoingProjects /> */}
      {/* <InteriorCafeProcess /> */}
    </>
  );
}
