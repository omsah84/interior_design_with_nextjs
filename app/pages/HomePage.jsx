import HomeImage from "../components/HomeImage"
import Offerings from "../components/Offerings"
import Testimonial from "../components/Testimonial"
import OngoingProjects from "../components/OngoingProjects"
import TrustFactorSection from "../components/TrustFactorSection"
import InteriorCafeProcess from "../components/InteriorCafeProcess"
import InteriorDesignGrid from "../components/InteriorDesignGrid"

export default function HomePage() {
  return (
    <div>
      <HomeImage/>
      <Offerings/>
      <Testimonial/>
      <OngoingProjects/>
      <InteriorDesignGrid/>
      <TrustFactorSection/>
      <InteriorCafeProcess/>
    </div>
  )
}
