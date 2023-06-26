import Image from 'next/image'
import ServiceCard1 from '../../public/resources/images/serviceCard1.png'
import ServiceCard2 from '../../public/resources/images/serviceCard2.png'
import ServiceCard3 from '../../public/resources/images/serviceCard3.png'
import ServiceIcon from '../../public/resources/images/serviceIcon.png'
import { Montserrat } from 'next/font/google'

const montserrat300 = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const ServiceCard = () => {
  return (
    <div className="w-full border border-customGreen p-2.5">
      <div className="text-center">
        <div className="relative">
          <Image src={ServiceCard1} alt={'Service'} className=" w-full" />
          <div className="absolute inset-x-0 -bottom-9 mx-auto max-w-max rounded-full border border-black bg-customGreen p-4">
            <Image src={ServiceIcon} alt={'Icon'} />
          </div>
        </div>
        <p className={`${montserrat300.className} mt-11 text-[22px] leading-8 text-white`}>Soch olish - Стрижка</p>
        <p className={`${montserrat300.className} mt-2.5 text-lg leading-8 text-white`}>Narx - Цена : 60.000 sum</p>
      </div>
    </div>
  )
}
