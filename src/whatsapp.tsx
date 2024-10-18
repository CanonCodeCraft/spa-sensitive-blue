import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const Whatsapp: React.FC = () => {
  const phoneNumber = "3205259060"; 
  const message = "¡Hola!%20Estoy%20interesado%20en%20los%20servicios%20de%20Sensitive%20Angels%20Spa.%20"+
  "¿Podrías%20darme%20detalles%20sobre%20los%20tratamientos%20y%20precios?%20¡Gracias!";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <FaWhatsapp size={32} color="#25D366" />
    </a>
  );
};