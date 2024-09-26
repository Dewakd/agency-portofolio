import React from "react";
import Banner from "../../Components/Banner";
import Cta from "../../Components/Cta";


export default function WorkPage() {
  const title = "Designing Digital Experiences for the Modern World."
  const description = "Explore our portfolio and see how we can transform your digital presence."
  const img = "bg-work-banner-background"
  return (
    <div className="bg-darkBold">
      <Banner title={title} description={description} img={img} button={false}/>
      <div className="py-[150px]">
        <h1 className="text-4xl text-light">Some highlights of work we've done for forward thinking clients.</h1>
      </div>
      <Cta />
    </div>
  );
}
