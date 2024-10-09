import HomeImage from "./components/HomeImage";
import Offerings from "./components/Offerings";
import Testimonial from "./components/Testimonial";
import OngoingProjects from "./components/OngoingProjects";
import TrustFactorSection from "./components/TrustFactorSection";
import InteriorCafeProcess from "./components/InteriorCafeProcess";
import InteriorDesignGrid from "./components/InteriorDesignGrid";
import HomeSpaceInterior from "./components/HomeSpaceInterior";
import WhatWeOffer from "./components/WhatWeOffer";

import HomeOffice from "./components/SliderFormater";
import LivingRoom from "./components/SliderFormater";
import BedRoom from "./components/SliderFormater";
import Kitchen from "./components/SliderFormater";
import DiningRoom from "./components/SliderFormater";
import OutdoorSpace from "./components/SliderFormater";

import { homeofficesliders } from "./data/HomeOffice.js";
import { livingroomsliders } from "./data/LivingRoom.js";
import { kitchensliders } from "./data/Kitchen.js";
import { outdoorspacesliders } from "./data/OutdoorSpace.js";
import { bedroomsliders } from "./data/BedRoom.js";
import { diningroomsliders } from "./data/DiningRoom.js";

export const runtime = "edge";

function DesignComponent() {

  
  return (
    <>
      <HomeOffice
        slides={homeofficesliders}
        heading="Home Office to Match Every Style"
        subheading="Explore productive and creative spaces tailored to your needs."
      />
      <LivingRoom
        slides={livingroomsliders}
        heading="Living Room to Match Every Style"
        subheading="Discover elegant and cozy designs for your gathering spaces."
      />
      <Kitchen
        slides={kitchensliders}
        heading="Kitchen to Match Every Style"
        subheading="Transform your culinary space with modern and functional designs."
      />
      <BedRoom
        slides={bedroomsliders}
        heading="Bedroom to Match Every Style"
        subheading="Create your serene retreat with our stylish bedroom designs."
      />
      <DiningRoom
        slides={diningroomsliders}
        heading="Dining Room to Match Every Style"
        subheading="Enjoy delightful dining experiences in beautifully designed spaces."
      />
      <OutdoorSpace
        slides={outdoorspacesliders}
        heading="Outdoor Space to Match Every Style"
        subheading="Enhance your outdoor areas for relaxation and entertainment."
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <HomeImage />
      <Offerings />
      <HomeSpaceInterior />
      <InteriorDesignGrid />
      <TrustFactorSection />
      <DesignComponent />
      <WhatWeOffer />
      {/* <Testimonial /> */}
      {/* <OngoingProjects /> */}
      <InteriorCafeProcess />
    </>
  );
}
