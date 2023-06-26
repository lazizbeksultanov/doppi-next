import Image from 'next/image'
import Worker from '../../public/resources/images/worker.png'
import { Montserrat } from 'next/font/google'

const montserrat300 = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const WorkerCard = () => {
  return (
    <div className="w-full border border-[#171717] bg-customGreen p-2.5">
      <div className="text-center">
        <Image src={Worker} alt={'Service'} className=" w-full" />
        <p className={`${montserrat300.className} my-7 text-center text-2xl text-black`}>Ism Familiya</p>
      </div>
    </div>
  )
}
