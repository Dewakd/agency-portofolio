import IncreasedNumber from "./IncreasedNumber";

export default function ContainerIncrease() {
  return (
    <div className="py-[70px] bg-darkBold flex flex-wrap justify-center">
      <div className="max-w-[256px] md:h-[130px] w-1/2  py-[15px] flex justify-center items-center">
        <IncreasedNumber icon="basil:dropbox-outline" number="34" title="Brands Helped" />
      </div>
      <div className="max-w-[256px] md:h-[130px] w-1/2  py-[15px] flex justify-center items-center">
        <IncreasedNumber icon="solar:basketball-linear" number="145" title="Ongoing Task" />
      </div>
      <div className="max-w-[256px] md:h-[130px] w-1/2  py-[15px] flex justify-center items-center">
        <IncreasedNumber icon="ph:note-pencil" number="437" title="Projects Done" />
      </div>
      <div className="max-w-[256px] md:h-[130px] w-1/2  py-[15px]  flex justify-center items-center">
        <IncreasedNumber icon="icons8:user-male" number="375" title="Satisfied Clients" />
      </div>
    </div>
  )
}