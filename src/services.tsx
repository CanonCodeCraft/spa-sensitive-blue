import { useState } from "react";
import { Container } from "react-bootstrap";
import { CustomModal } from "./modal";
import Image from 'react-bootstrap/Image';
import './services.css';

export const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const openModal = (pTitle: string) =>{
    setTitle(pTitle);
    setIsModalOpen(true);
  } 
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <div className="my-container"
        style={{
          textAlign: "center",
          fontFamily:"Great Vibes, cursive",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <div className="row">
          <div className="col">
            <h1 style={{ marginBottom: "70px" }}>Nuestros Servicios</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("Cuidado de la piel");
              }}
            >
              <Image src="./unsplashImg/mask2.jpg" roundedCircle style={{ width: "250px", height: "250px" }} />
            </a>
            <h3 style={{marginTop:"20px"}}>Cuidado de la piel</h3>
          </div>
          <div className="col">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("Belleza");
              }}
            >
              <Image src="./unsplashImg/product2.jpg" roundedCircle style={{ width: "250px", height: "250px" }} />
            </a>
            <h3 style={{marginTop:"20px"}}>Belleza</h3>
          </div>
          <div className="col">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("Masajes");
              }}
            >
              <Image src="./unsplashImg/banner6.jpg" roundedCircle style={{ width: "250px", height: "250px" }} />
            </a>
            <h3 style={{marginTop:"20px"}}>Masajes</h3>
          </div>
          <div className="col">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal("Cuidado de uñas");
              }}
            >
              <Image src="./unsplashImg/nails6.jpg" roundedCircle style={{ width: "250px", height: "250px" }} />
            </a>
            <h3 style={{marginTop:"20px"}}>Cuidado de Uñas</h3>
          </div>
        </div>
        <CustomModal isOpen={isModalOpen} closeModal={closeModal} pTitle={title} />
      </div>
    </Container>
  );
};
