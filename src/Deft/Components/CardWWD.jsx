import { Icon } from '@iconify/react';

export default function CardWWD({ icon, header, description }) {
  return (
    <div className="flex py-4 gap-[10px]">
      <Icon icon={icon} className='w-[48px] h-[48px] text-red' />
      <div>
        <h3 className="text-white text-[18px] font-bold mb-[8px]">{header}</h3>
        <p className="text-text font-normal text-[16px] font-roboto mb-[18px] w-[292px]">{description}</p>
        <a href="" className='flex items-center text-red text-[14px] font-semibold'>Read More <Icon icon="solar:double-alt-arrow-right-line-duotone" className='w-[20px] h-[20px] text-red' /></a>
      </div>
    </div>
  )
}