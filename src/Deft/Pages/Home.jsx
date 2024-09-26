import Cta from "../../Components/Cta";
import BannerHome from "../Components/BannerHome";
import CTAAbout from "../Components/CTAAbout";
import FeaturedWorks from "../Components/FeaturedWorks";
import OurProcess from "../Components/OurProcess";
import WhatWeDo from "../Components/WhatWeDo";
import WhoWeAre from "../Components/WhoWeAre";

export default function Home() {
  return (
    <div className=" bg-darkBold">
      <BannerHome />
      <WhatWeDo />
      <WhoWeAre />
      <CTAAbout />
      <OurProcess />
      <FeaturedWorks />
      <Cta />
    </div>
  )
}