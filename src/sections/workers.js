import { Montserrat, Playfair_Display } from 'next/font/google'
import { WorkerCard } from '@/components/worker-card'

const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
})

const montserrat300 = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const Workers = () => {
  return (
    <div className="w-full bg-customGreen pb-24 pt-12">
      <div className="container">
        <p className={`${playfairDisplay.className} mt-5 text-center text-4xl text-[#171717]`}>Bizning barberlar.</p>
        <p className={`${montserrat300.className} mt-12 text-start text-xl leading-8 tracking-widest text-[#171717]`}>
          Biz sizga eng yaxshi tajribani taqdim etishga bag`ishlanganmiz. Bizning mutaxassislar jamoasi bu erda sizga
          to`g`ri xizmatni tanlashdan oxirigacha har qadamda yordam berishga tayyor.
        </p>
        <div className="mt-[50px] grid grid-cols-1 space-y-7">
          <WorkerCard />
          <WorkerCard />
          <WorkerCard />
        </div>
      </div>
    </div>
  )
}
