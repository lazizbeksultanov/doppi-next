import { Montserrat, Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
})

const montserrat300 = Montserrat({
  weight: '300',
  subsets: ['latin'],
})

export const WorkingTime = () => {
  return (
    <div className="mt-12 w-full">
      <div className="container">
        <div className="w-full border border-customGreen p-4">
          <p className={`${playfairDisplay.className} text-center text-[28px] text-customGreen`}>Ish vaqti.</p>
          <div className={`${montserrat300.className} mt-7 text-sm text-customGreen`}>
            <div className="flex w-full justify-between border-y border-customGreen py-4">
              <p>Har kuni</p>
              <p>08:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
