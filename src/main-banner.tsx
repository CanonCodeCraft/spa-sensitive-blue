// MainBanner.tsx
import Carousel from 'react-bootstrap/Carousel';
import './main-banner.css';

export const MainBanner = () => {
  const items = [
    {
      name: "Agenda tu cita con Sensitive",
      description: "Sensitive Angels Spa: Donde cuerpo y alma se encuentran en equilibrio.",
      image: "./unsplashImg/banner1.jpg"
    },
    {
      name: "Renueva Tu Esencia, Reserva con nosotros",
      description: "Descubre la suavidad de una piel saludable con nuestros tratamientos.",
      image: "./unsplashImg/banner7.jpg"
    },
    {
      name: "Desde la comodidad de tu hogar",
      description: "Realza tu brillo interior con nuestros rituales personalizados.",
      image: "./unsplashImg/banner2.jpg"
    },
    {
      name: "Servicio de Spa a Domicilio",
      description: "Conecta con tu paz interior entre aromas, aceites y susurros de calma.",
      image: "./unsplashImg/banner5.jpg"
    }
  ];

  return (
    <Carousel fade indicators>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 banner-img"
            src={item.image}
            alt={item.name}
          />
          <Carousel.Caption className="banner-caption">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
