import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './whatsapp.css';

export const Whatsapp: React.FC = () => {
  const phoneNumber = "+57 3205259060";
  const message = encodeURIComponent("¡Hola! Estoy interesado en los servicios de Sensitive Angels Spa. ¿Podrías darme detalles sobre los tratamientos y precios? ¡Gracias!");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-container">
      <a
        href={whatsappUrl}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="tooltip-text">¿Deseas reservar? Chatea con nosotros</span>
      </a>
    </div>
  );
};
