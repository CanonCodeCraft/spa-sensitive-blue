import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { FaCheck } from "react-icons/fa";

export const About = () => {
  return (
    <Container>
      <div style={{textAlign: 'center', fontFamily: 'roboto'}}>

      <div className="row">
        <div className="col">
          <h1 style={{ marginBottom: "70px", fontFamily:"Great Vibes, cursive", fontSize: "4rem" }}>Sobre Nosotros</h1>
        </div>
      </div>
      <div className="row">

      <div className="col">
          <Image src="./unsplashImg/sombreado3.jpg" roundedCircle style={{width: "100%", height: "40vh", marginBottom:"30px"}} />
          <h3 style={{fontFamily:"Great Vibes, cursive", fontSize: "2rem"}}>Misión</h3>
          <div style={{textAlign: 'justify'}}>
            <p>Brindar servicios de estética personalizados y de alta calidad, utilizando las últimas tecnologías y técnicas en cuidado facial, corporal y de uñas. Compromisos:
              <br/>
              <FaCheck /> Proporcionar un ambiente acogedor y relajante.
              <br/>
              <FaCheck /> Ofrecer tratamientos innovadores y efectivos.
                <br/>
              <FaCheck /> Fomentar la confianza y satisfacción del cliente.
                <br/>
              <FaCheck /> Actualización constante adoptando técnicas con la última tecnología.
                <br/>
              <FaCheck /> Establecimiento de relaciones basadas en la confianza.</p>
          </div>
        </div>

        <div className="col">
          <Image src="./unsplashImg/banner5.jpg" roundedCircle style={{width: "100%", height: "40vh", marginBottom:"30px"}}/>
          <h3 style={{fontFamily:"Great Vibes, cursive", fontSize: "2rem"}}>Visión</h3>
          <div style={{textAlign: 'justify'}}>
            
            <p >Reconocimiento en Bogotá como profesional de preferencia en servicios de estética facial, corporal y cuidado de uñas, 
              destacando por la excelencia en servicios personalizados, innovación constante y ambiente acogedor. 
              Inspirar confianza y belleza en cada persona que atiendo, superando sus expectativas y estableciendo un estándar
              de excelencia en el cuidado de la piel y el bienestar integral.</p>
          </div>
        </div>
        
        <div className="col">
          <Image src="./unsplashImg/aux1.jpg" roundedCircle style={{width: "100%", height: "40vh", marginBottom:"30px"}}/>
          <h3 style={{fontFamily:"Great Vibes, cursive", fontSize: "2rem"}}>Objetivos</h3>
          <div style={{textAlign: 'justify'}}>
            <p>
            <FaCheck /> Aliado de confianza para el cuidado de la piel y el bienestar del cliente
            <br/>
            <FaCheck /> Garantizar que cada cliente se sienta valorado y renovado, ofreciendo un servicio integral que abarca desde tratamientos faciales y corporales hasta cuidado de uñas.
            <br/>
            <FaCheck /> Promover una experiencia de relajación y rejuvenecimiento que mejore la calidad de vida de los clientes, fomentando la lealtad y construyendo una reputación basada en la excelencia y el compromiso con el bienestar integral.
            </p>
          </div>
        </div>
      </div>
      </div>
    </Container>
  )
}
