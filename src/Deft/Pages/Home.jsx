import BannerHome from "../Components/BannerHome";
import WhatWeDo from "../Components/WhatWeDo";

export default function Home() {
  return (
    <div className=" bg-darkBold h-[200vh] px-[12px]">
      <BannerHome />
      <WhatWeDo />
    </div>
  )
}