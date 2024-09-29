import { Icon } from '@iconify/react';

export default function CardWWD({ icon, header, description }) {
  return (
    <div className="flex flex-col sm:flex-row py-4 md:py-0 md:pb-4 gap-[10px] md:flex-wrap p-3 md:p-10">
      <Icon icon={icon} className='w-[48px] h-[48px] text-red' />
      <div>
        <h3 className="text-white text-[18px] font-bold mb-[8px] md:text-[24px]">{header}</h3>
        <p className="text-text font-normal text-[16px] font-roboto mb-[18px] max-w-[350px] text-justify">{description}</p>
      </div>
    </div>
  )
}