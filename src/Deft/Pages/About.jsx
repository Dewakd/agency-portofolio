import Cta from "../../Components/Cta";
import Banner from "../Components/Banner";
import Clients from "../Components/Clients";
import ContainerIncrease from "../Components/ContainerIncrease";
import WeAre from "../Components/WeAre";
import WhyChoose from "../Components/WhyChoose";

export default function About() {
  return (
    <div className="bg-darkBold">
      <Banner />
      <WeAre />
      <WhyChoose />
      <ContainerIncrease />
      <Clients />
      <Cta />
    </div>
  )
}