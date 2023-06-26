import { Montserrat, Playfair_Display } from 'next/font/google'
import { Button } from '@/components/Button'

const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
})
const montserrat300 = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const Main = () => {
  return (
    <div className="w-full bg-main-bg bg-cover bg-no-repeat pb-44 pt-24">
      <div className="container">
        <p className={`${playfairDisplay.className} text-4xl leading-[48px] text-customGreen`}>
          Sizni chiroyli qilish bizning maqsadimizdir.
        </p>
        <p className={`${montserrat300.className} mt-7 text-xl leading-8 text-white`}>
          Orzularingizning har safar mukammal kesimini oling sizning uslubingiz haqida qayg`uradigan sartaroshxona!
        </p>
        <div className="mt-36 flex flex-col space-y-7">
          <div className="mx-auto w-5/6">
            <Button variant="solid">Joy band qilish</Button>
          </div>
          <div className="mx-auto w-5/6">
            <Button variant="outline">Qo’ng’iroq qilish</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
