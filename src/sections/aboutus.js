import { Montserrat, Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
})

const montserrat300 = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const AboutUs = () => {
  return (
    <div className="w-full bg-customGreen pb-24 pt-12">
      <div className="container">
        <p className={`${playfairDisplay.className} text-center text-8xl text-black`}>10</p>
        <p className={`${playfairDisplay.className} mt-5 text-center text-4xl text-black`}>Yillik tajriba</p>
        <p className={`${playfairDisplay.className} mt-12 text-start text-4xl text-black`}>Biz kimmiz ?</p>
        <p className={`${montserrat300.className} mt-12 text-start text-xl leading-8 tracking-widest text-black`}>
          Do‘ppi MENda navbat yo‘q Barbershopga kirishda o‘zingizga beradigan asosiy savolingiz: Qancha kutar ekanman?
          Bizda navbat yo‘q. Agar barcha ustalar band bo‘lsa, bemalol Play Station o‘ynashingiz, soch-soqol uchun
          kosmetik vositalar xarid qilishingiz yoki choy ichib o‘tirishingiz mumkin. Aytgancha, choy bizning
          hisobimizdan Doppi Men – mijozlarning vaqtini qadrlaymiz
        </p>
      </div>
    </div>
  )
}
