import { Main } from '@/sections/main'
import { AboutUs } from '@/sections/aboutus'
import { Services } from '@/sections/services'
import { AdditionalServices } from '@/sections/additional-services'
import { WorkingTime } from '@/sections/working-time'
import { Workers } from '@/sections/workers'
import { Footer } from '@/sections/footer'

export default function Home() {
  return (
    <main>
      <Main />
      <AboutUs />
      <div className="bg-[#171717] pb-[50px]">
        <Services />
        <AdditionalServices />
        <WorkingTime />
      </div>
      <Workers />
      <Footer />
    </main>
  )
}
