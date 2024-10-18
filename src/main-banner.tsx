import Carousel from 'react-bootstrap/Carousel';
import './main-banner.css'
export const MainBanner = () => 
  {
    var items = [
        {
            name: "Relajación Suprema en Sensitive Angels Spa",
            description: "Escápate a la tranquilidad y rejuvenece tus sentidos.",
            image:"./unsplashImg/banner1.jpg"
        },
        {
            name: "Revitaliza Tu Piel",
            description: "Logra una piel radiante con nuestros avanzados tratamientos faciales.",
            image:"./unsplashImg/banner7.jpg"
        },
        {
            name: "Rituales de Belleza",
            description: "Tratamientos que realzan tu belleza natural",
            image:"./unsplashImg/banner2.jpg"
        },
        {
            name: "",
            description: "",
            image:"./unsplashImg/banner8.jpg"
        }
    ]

  return (
    <Carousel >

      {items.map((item, index) =>

        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} style={{width:"100%", height:"100vh"}}/>
          <Carousel.Caption>
          <h1 style={{fontFamily:"Great Vibes, cursive", fontSize: "5rem"}}>{item.name}</h1>
          <h5 style={{fontFamily:"Great Vibes, cursive", fontSize: "3rem"}}>{item.description}</h5>
          </Carousel.Caption>
        </Carousel.Item>

      )}
      
    </Carousel>
  )
}
