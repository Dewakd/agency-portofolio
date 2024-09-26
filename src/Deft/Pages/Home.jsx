import Cta from "../../Components/Cta";
import Award from "../Components/Award";
import BannerHome from "../Components/BannerHome";
import CTAAbout from "../Components/CTAAbout";
import Company from "../Components/Company";
import FeaturedWorks from "../Components/FeaturedWorks";
import OurProcess from "../Components/OurProcess";
import WhatWeDo from "../Components/WhatWeDo";
import WhoWeAre from "../Components/WhoWeAre";

export default function Home() {
  return (
    <div className="bg-darkBold">
      <BannerHome />
      <WhatWeDo />
      <WhoWeAre />
      <CTAAbout />
      <OurProcess />
      <FeaturedWorks />
      <Award />
      <Company />
      <Cta />
    </div>
  )
}