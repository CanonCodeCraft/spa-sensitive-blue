import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import { Placeholder } from "react-bootstrap";
import './modal.css'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  pTitle: string;
}

export const CustomModal: React.FC<ModalProps> = ({ isOpen, closeModal, pTitle }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ajusta el tiempo según el tiempo de carga esperado

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <Modal show={isOpen} onHide={closeModal} className="custom-modal-width">
      <Modal.Header closeButton>
        <Modal.Title style={{ textAlign: 'center', fontFamily: "Great Vibes, cursive", fontSize: "2rem" }}>
          {pTitle}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-content-wrapper">
          <div className="modal-description" style={{ textAlign: 'center', fontFamily: "Great Vibes, cursive" }}>
            {isLoading ? (
              <Placeholder as="p" animation="glow">
                <Placeholder xs={6} />
                <Placeholder xs={4} /> <Placeholder xs={8} />
                <Placeholder xs={4} />
              </Placeholder>
            ) : (
              <>
                {pTitle === "Cuidado de la piel" && renderImageList(skinCareL)}
                {pTitle === "Belleza" && renderImageList(beautyL)}
                {pTitle === "Cuidado de uñas" && renderImageList(nailsCareL)}
                {pTitle === "Masajes" && renderImageList(massageL)}
              </>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const renderImageList = (list: Array<{ img: string; title: string; author: string; }>) => (
  <ImageList sx={{ width: 500, height: 450 }}>
    {list.map((item) => (
      <ImageListItem key={item.img}>
        <img
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=248&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.title}
          subtitle={item.author}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.title}`}
            >
            </IconButton>
          }
        />
      </ImageListItem>
    ))}
  </ImageList>
);

const skinCareL = [
  { img: './unsplashImg/product1.jpg', title: 'Gel desmaquillante', author: '$15.000 - $20.000', rows: 2, cols: 2, featured: true },
  { img: './unsplashImg/aloe1.jpg', title: 'Aloe vera', author: '$15.000 - $20.000' },
  { img: './unsplashImg/mask1.jpg', title: 'Mascarillas faciales', author: '$15.000 - $20.000' },
  { img: './unsplashImg/vapor1.jpg', title: 'Vapor ozono', author: '$15.000 - $20.000', cols: 2 },
  { img: './unsplashImg/mask2.jpg', title: 'Exfoliación y tónico', author: '$15.000 - $20.000', cols: 2 },
];

const beautyL = [
  { img: './unsplashImg/pestania4.jpg', title: 'Lifting y pelo a pelo', author: '$15.000 - $20.000', rows: 2, cols: 2, featured: true },
  { img: './unsplashImg/pestania2.jpg', title: 'Sombreado', author: '$15.000 - $20.000' },
  { img: './unsplashImg/laminado1.jpg', title: 'Laminado', author: '$15.000 - $20.000' },
];

const massageL = [
  { img: './unsplashImg/massage2.jpg', title: 'Relajante', author: '$15.000 - $20.000' },
  { img: './unsplashImg/massage1.jpg', title: 'Deportivo', author: '$15.000 - $20.000' },
  { img: './unsplashImg/vapor2.jpg', title: 'Aroma terapia<', author: '$15.000 - $20.000', cols: 2 },
  { img: './unsplashImg/massage3.jpg', title: 'Piedras calientes', author: '$15.000 - $20.000', cols: 2 },
  { img: './unsplashImg/massage5.jpg', title: 'Pre y Post natal', author: '$15.000 - $20.000', rows: 2, cols: 2, featured: true },
];

const nailsCareL = [
  { img: './unsplashImg/nails11.jpg', title: 'Manicura y Pedicura', author: '$15.000 - $20.000', rows: 2, cols: 2, featured: true },
  { img: './unsplashImg/nails5.jpg', title: 'Gel y acrílico', author: '$15.000 - $20.000' },
  { img: './unsplashImg/nails10.jpg', title: 'Diseños', author: '$15.000 - $20.000' },
];
