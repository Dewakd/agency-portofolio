import { Icon } from "@iconify/react";

export default function ({ icon, header, description }) {
  return (
    <div className="py-[20px] flex w-full sm:flex-col sm:px-[20px]">
      <div className="w-[30%]">
        <Icon icon={icon} className="text-red w-[35px] h-[35px]" />
      </div>
      <div className="-mt-[6px] ml-[20px] sm:mt-5 sm:ml-0">
        <h3 className="text-[18px] font-poppins mb-[8px] font-bold text-white">{header}</h3>
        <p className="font-roboto text-text">{description}</p>
      </div>
    </div>
  )
}