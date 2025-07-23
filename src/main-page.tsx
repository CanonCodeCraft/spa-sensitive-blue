import {MainBanner} from './main-banner'
import  Servicios  from './new-services'
import { BannerMassage } from './banner-message'
import { About } from './about'

export const MainPage = () => {
  return (
    <div className='App'>
        <MainBanner/>
        
        <br/>
         <h1 style={{
          fontFamily: "Great Vibes, cursive",
          fontSize: '4.5rem',         
          marginBottom: '1.5rem',     
          textAlign: 'center',        
        }}>
          Servicios a Domicilio en Bogotá
        </h1>
        <Servicios/>
        <BannerMassage/>
        <section id="nosotros" style={{ padding: '100px 0' }}>
          <About/>
        </section>
    </div>
  )
}
