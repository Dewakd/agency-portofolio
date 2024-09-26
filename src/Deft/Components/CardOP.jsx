import { Icon } from "@iconify/react"

export default function CardOP({ icon, header, description }) {
  return (
    <div className="flex flex-col items-center justify-center py-[20px]">
      <div className="w-[70px] aspect-square bg-white flex justify-center items-center rounded-full text-red">
        <Icon icon={icon} className="w-[30px] h-[30px]" />
      </div>
      <h1 className="text-white mt-[20px] mb-[10px] font-poppins font-bold text-[18px]">{header}</h1>
      <p className="text-center text-text font-roboto px-[3px]">{description}</p>
    </div>
  )
}