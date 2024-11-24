import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CategoryCards = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Carpas",
      description: "Encuentra tu carpa.",
      imgSrc: "./categorias_carpa.png",
      link: "/carpas", // Ruta para Carpas
    },
    {
      title: "Mochilas",
      description: "Equipate con la mochila ideal.",
      imgSrc: "./categorias_moch.png",
      link: "/CategoriaMochilas", // Ruta para Mochilas
    },
    {
      title: "Sacos & Colchonetas",
      description: "Todo para dormir.",
      imgSrc: "./categorias_saco.png",
      link: "/CategorySacos", // Ruta para Sacos & Colchonetas
    },
    {
      title: "Accesorios",
      description: "Equipamiento para tus actividades.",
      imgSrc: "./categorias_acc.png",
      link: "/accesorios", // Ruta para Accesorios
    },
  ];

  return (
    <Row className="mt-4">
      {categories.map((category, index) => (
        <Col md={3} key={index} className="mb-4">
          <Card>
            <Card.Img variant="top" src={category.imgSrc} />
            <Card.Body>
              <Card.Title>{category.title}</Card.Title>
              <Card.Text>{category.description}</Card.Text>
              {/* Modificación aquí para usar navigate */}
              <Card.Link
                href="#"
                onClick={() => navigate(category.link)} // Navegar a la ruta correspondiente
              >
                Ver más
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CategoryCards;
