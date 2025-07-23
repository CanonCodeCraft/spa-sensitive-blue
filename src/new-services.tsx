import React, { useState } from "react";
import { Carousel, Card, Row, Col, Container, Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './new-service.css'

// Definimos tipos
type Servicio = {
  titulo: string;
  descripcion: string;
  precio: string;
  img: string;
};

type ServiciosPorCategoria = {
  [categoria: string]: Servicio[];
};

const servicios: ServiciosPorCategoria = {
  "Skin Care": [
    {
      titulo: "Skin Care",
      descripcion:
        "1. Diagnóstico tipo de piel. \n 2. Gel o Leche limpiadora\n3. Exfoliación y tónico\n4. Aloe Vera\n5. Vapor Ozono\n6. Extracción/Hidratación de piel\n7. Alta frecuencia\n8. Mascarilla\n9. Hidratación de piel\n10. Protector Solar",
      precio: "$149.000",
      img: "./unsplashImg/mask2.jpg"
    },
    {
      titulo: "Lifting",
      descripcion: "Risado de Pestañas temporal que dura de 2 a 3 semanas.",
      precio: "$39.000",
      img: "./unsplashImg/pestania5.jpg"
    },
    {
      titulo: "Pestañas Pelo a Pelo",
      descripcion: "Clásicas, Volumen Ruso e Híbridas.",
      precio: "$89.000",
      img: "./unsplashImg/pestania4.jpg"
    },
    {
      titulo: "Sombreado de Cejas",
      descripcion: "Técnica de maquillaje de pigmentación semipermanente que crea cejas más definidas y pobladas.",
      precio: "$35.000",
      img: "./unsplashImg/pestania2.jpg"
    },
    {
      titulo: "Laminado",
      descripcion: "Rediseño y definición de cejas, corrige cejas rebeldes o difíciles de trabajas, mantenimiento moderado y dura varias semanas.",
      precio: "$35.000",
      img: "./unsplashImg/laminado2.jpg"
    }
  ],
  Masajes: [
    {
      titulo: "Relajante",
      descripcion: "Alivia tensión muscular y estrés, incluye aromaterapia y piedras calientes.",
      precio: "$119.000",
      img: "./unsplashImg/massage3.jpg"
    },
    {
      titulo: "Deportivo",
      descripcion: "Masaje terapeutico diseñado para ayudar a atletas y personas activas a recuperarse de lesiones, reducir dolor muscular y mejorar su rendimiento.",
      precio: "$119.000",
      img: "./unsplashImg/massage6.jpg"
    },
    {
      titulo: "Reductor",
      descripcion: "Enfocado en reducir la grasa y celulitis en areas específicas del cuerpo (Abdomen, muslos y gluteos).",
      precio: "$59.000",
      img: "./unsplashImg/massage2.jpg"
    },
    {
      titulo: "Pre y Post Natal",
      descripcion: "Alivia tensiones y la recuperación física de mujeres durante y después del embarazo",
      precio: "$99.000",
      img: "./unsplashImg/massage5.jpg"
    },
    {
      titulo: "Post Operatorio",
      descripcion: "Apoya la recuperación después de una cirugía plástica. Reduce dolor, inflamación, mejora la circulación sanguínea y linfática",
      precio: "$129.000",
      img: "./unsplashImg/massage2.jpg"
    }
  ],
  "Cuidado de Uñas": [
    {
      titulo: "Manicure Tradicional",
      descripcion: "",
      precio: "$24.000",
      img: "./unsplashImg/nails12.jpg"
    },
    {
      titulo: "Pedicure",
      descripcion: "",
      precio: "$35.000",
      img: "./unsplashImg/pedicure2.jpg"
    },
    {
      titulo: "Uñas en Poligel",
      descripcion: "",
      precio: "",
      img: "./unsplashImg/nails11.jpg"
    },
    {
      titulo: "Uñas Acrílicas",
      descripcion: "",
      precio: "",
      img: "./unsplashImg/nails10.jpg"
    },
    {
      titulo: "Diseños",
      descripcion: "",
      precio: "",
      img: "./unsplashImg/nails13.jpg"
    }
  ]
};

type ServicioCardProps = {
  servicio: Servicio;
};

const ServicioCard: React.FC<ServicioCardProps> = ({ servicio }) => {
  const [open, setOpen] = useState(false);

  return (
    
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={servicio.img}
        alt={`Servicio de ${servicio.titulo}`}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title
          className="fw-bold"
          style={{ fontFamily: "Great Vibes, cursive", fontSize: "1.5rem" }}
        >
          {servicio.titulo}
        </Card.Title>

        <Button
          hidden = {servicio.descripcion == ""}
          className="boton-detalles-spa mb-2"
          onClick={() => setOpen(!open)}
          aria-controls={`desc-${servicio.titulo}`}
          aria-expanded={open}
        >
          {open ? "Ocultar descripción" : "Detalles"}
        </Button>

        

        <Collapse in={open}>
          <div id={`desc-${servicio.titulo}`}>
            <Card.Text className="descripcion-spa" style={{ whiteSpace: 'pre-line' }}>
            {servicio.descripcion || "Sin descripción disponible."}
          </Card.Text>
          </div>
        </Collapse>

        <Card.Text className="precio-dorado">
          {servicio.precio || "Consulta precios vía Whatsapp"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

type ServicioCarouselProps = {
  titulo: string;
  items: Servicio[];
};

const ServicioCarousel: React.FC<ServicioCarouselProps> = ({ titulo, items }) => {
  const chunked: Servicio[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    chunked.push(items.slice(i, i + 3));
  }

  return (
    <div className="my-5">
      <h2 className="text-center mb-4" style={{ fontFamily: "Great Vibes, cursive" }}>
        {titulo}
      </h2>


      <Carousel interval={null} indicators={false} pause="hover">
        {chunked.map((grupo, idx) => (
          <Carousel.Item key={idx}>
            <Container>
              <Row>
                {grupo.map((item, i) => (
                  <Col md={4} key={i} className="mb-4">
                    <ServicioCard servicio={item} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default function Servicios() {
  return (
    <div>
      {Object.entries(servicios).map(([categoria, items]) => (
        <ServicioCarousel key={categoria} titulo={categoria} items={items} />
      ))}
    </div>
  );
}