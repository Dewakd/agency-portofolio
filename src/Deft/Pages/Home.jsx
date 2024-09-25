import Cta from "../../Components/Cta";
import BannerHome from "../Components/BannerHome";
import WhatWeDo from "../Components/WhatWeDo";

export default function Home() {
  return (
    <div className=" bg-darkBold">
      <BannerHome />
      <WhatWeDo />
      <Cta />
    </div>
  )
}