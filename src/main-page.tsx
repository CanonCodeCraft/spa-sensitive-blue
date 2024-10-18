import {MainBanner} from './main-banner'
import { Services } from './services'
import { BannerMassage } from './banner-message'
import { About } from './about'

export const MainPage = () => {
  return (
    <div className='App'>
        <MainBanner/>
        <Services/>
        <BannerMassage/>
        <section id="nosotros" style={{ padding: '100px 0' }}>
          <About/>
        </section>
    </div>
  )
}
