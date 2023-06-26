import { Montserrat, Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
})

const montserrat300 = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const AdditionalServices = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="w-full border border-customGreen p-4">
          <p className={`${playfairDisplay.className} text-center text-[28px] text-customGreen`}>
            Qo’shimcha hizmatlar
          </p>
          <div className={`${montserrat300.className} mt-7 text-sm text-customGreen`}>
            <div className="flex w-full justify-between border-y border-customGreen py-4">
              <p>Soch bo’yash</p>
              <p>40.000 dan boshlab</p>
            </div>
            <div className="flex w-full justify-between border-b border-customGreen py-4">
              <p>Soch bo’yash</p>
              <p>100.000 dan boshlab</p>
            </div>
            <div className="flex w-full justify-between border-b border-customGreen py-4">
              <p>Soch ximya qilish</p>
              <p>200.000 dan boshlab</p>
            </div>
            <div className="flex w-full justify-between border-b border-customGreen py-4">
              <p>Yuz tozalash</p>
              <p>50.000 dan boshlab</p>
            </div>
            <div className="flex w-full justify-between border-b border-customGreen py-4">
              <p>Kuyov turmagi</p>
              <p>250.000 dan boshlab</p>
            </div>
            <div className="flex w-full justify-between border-b border-customGreen py-4">
              <p>0 ga soch olish</p>
              <p>20.000 sum</p>
            </div>
            <div className="flex w-full justify-between border-b border-customGreen py-4">
              <p>Korolevskiy britva</p>
              <p>50.000 sum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
