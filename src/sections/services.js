import { Montserrat, Playfair_Display } from 'next/font/google'
import { ServiceCard } from '@/components/service-card'

const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
})

const montserrat300 = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const Services = () => {
  return (
    <div className="py-[50px]">
      <div className="container">
        <p className={`${playfairDisplay.className} mt-5 text-center text-4xl text-customGreen`}>Bizning hizmatlar.</p>
        <p className={`${montserrat300.className} mt-12 text-start text-xl leading-8 tracking-widest text-customGreen`}>
          Biz sizga eng yaxshi tajribani taqdim etishga bag`ishlanganmiz. Bizning mutaxassislar jamoasi bu erda sizga
          to`g`ri xizmatni tanlashdan oxirigacha har qadamda yordam berish uchun.
        </p>
        <div className="mt-[50px] grid grid-cols-1 space-y-7">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  )
}
