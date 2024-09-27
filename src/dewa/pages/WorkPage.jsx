import React from "react";
import Banner from "../../Components/Banner";
import Cta from "../../Components/Cta";
import FeaturedWorks from "../../Deft/Components/FeaturedWorks";


export default function WorkPage() {
  const title = "Designing Digital Experiences for the Modern World."
  const description = "Explore our portfolio and see how we can transform your digital presence."
  const img = "bg-work-banner-background"
  return (
    <div className="bg-darkBold">
      <Banner title={title} description={description} img={img} button={false}/>
      <div className="pb-[150px]">
        <FeaturedWorks CTA = {false}/>
      </div>
      <Cta />
    </div>
  );
}
