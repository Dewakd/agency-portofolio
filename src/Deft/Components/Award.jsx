import IncreasedNumber from "./IncreasedNumber";

export default function Award() {
  return (
    <div className="h-[519px] md:h-[558px] bg-award bg-fixed bg-cover bg-center bg-no-repeat py-[57px] md:flex md:justify-center md:gap-[50px] md:items-center">
      <div className="text-white px-[12px] py-[15px] md:w-[490px] md:p-[15px]">
        <h1 className="font-poppins md:text-[30px] text-[22px] font-bold leading-7 mb-[10px] md:leading-[50px]">Our top minds make it happen with digital approach</h1>
        <p className="font-normal pr-[15px] font-roboto">Our award-winning design team and engineers with proficiency across multiple fields & specializations.</p>
      </div>
      <div className="px-[12px] py-[15px] md:justify-center md:items-center flex flex-wrap md:w-[570px] md:h-[260px]">
        <div className="max-w-[256px] md:h-[130px] w-1/2 border-[.1px] py-[15px] border-gray-500 flex justify-center items-center">
          <IncreasedNumber icon="basil:dropbox-outline" number="34" title="Brands Helped" />
        </div>
        <div className="max-w-[256px] md:h-[130px] w-1/2 border-[.1px] py-[15px] border-gray-500 flex justify-center items-center">
          <IncreasedNumber icon="solar:basketball-linear" number="145" title="Ongoing Task" />
        </div>
        <div className="max-w-[256px] md:h-[130px] w-1/2 border-[.1px] py-[15px] border-gray-500 flex justify-center items-center">
          <IncreasedNumber icon="ph:note-pencil" number="437" title="Projects Done" />
        </div>
        <div className="max-w-[256px] md:h-[130px] w-1/2 border-[.1px] py-[15px] border-gray-500 flex justify-center items-center">
          <IncreasedNumber icon="icons8:user-male" number="375" title="Satisfied Clients" />
        </div>
      </div>
    </div>
  );
}
