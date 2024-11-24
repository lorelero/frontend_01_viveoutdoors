// src/pages/CategorySacos.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const productos = [
  {
    id: 0,
    imagen: "/saco.webp",
    titulo: "Saco de Dormir Lafuma",
    detalle: "Saco ligero y resistente.",
    precio: "$72.990",
  },
  {
    id: 1,
    imagen: "/sacoLafuma.jpg",
    titulo: "Saco de Dormir Lafuma",
    detalle: "Saco ideal para camping.",
    precio: "$70.000",
  },
  {
    id: 2,
    imagen: "/sacoDoite1.jpg",
    titulo: "Saco de Dormir Doite",
    detalle: "Saco de alta calidad.",
    precio: "$89.990",
  },
  {
    id: 3,
    imagen: "/sacoLippi.webp",
    titulo: "Saco de Dormir Lippi",
    detalle: "Saco cómodo y cálido.",
    precio: "$74.990",
  },
  {
    id: 4,
    imagen: "/colchoneta-z-lite.jpg",
    titulo: "Colchoneta Therm-a-Rest",
    detalle: "Colchoneta ligera y fácil de transportar.",
    precio: "$65.000",
  },
  {
    id: 5,
    imagen: "/ColchonetaLippi.jpg",
    titulo: "Colchoneta Lippi",
    detalle: "Colchoneta cómoda y duradera.",
    precio: "$27.990",
  },
  {
    id: 6,
    imagen: "/colchonetaDoite.jpeg",
    titulo: "Colchoneta Doite",
    detalle: "Colchoneta de camping.",
    precio: "$16.990",
  },
  {
    id: 7,
    imagen: "/colchonetaTherm.jpg",
    titulo: "Colchoneta Therm-a-Rest",
    detalle: "Colchoneta aislante.",
    precio: "$140.000",
  },
  {
    id: 8,
    imagen: "/saco.webp",
    titulo: "Saco de dormir Lafuma",
    detalle: "Saco ligero y resistente.",
    precio: "$72.990",
  },
  {
    id: 9,
    imagen: "/sacoLafuma.jpg",
    titulo: "Saco de dormir Lafuma",
    detalle: "Saco ideal para camping.",
    precio: "$70.000",
  },
  {
    id: 10,
    imagen: "/sacodoite.webp",
    titulo: "Saco de dormir Doite",
    detalle: "Saco de alta calidad.",
    precio: "$89.990",
  },
  {
    id: 11,
    imagen: "/sacoLippi.webp",
    titulo: "Saco de Dormir Lippi",
    detalle: "Saco cómodo y cálido.",
    precio: "$74.990",
  },
  {
    id: 12,
    imagen: "/colchoneta-z-lite.jpg",
    titulo: "Colchoneta Therm-a-Rest",
    detalle: "Colchoneta ligera y fácil de transportar.",
    precio: "$65.000",
  },
  {
    id: 13,
    imagen: "/ColchonetaLippi.jpg",
    titulo: "Colchoneta Lippi",
    detalle: "Colchoneta cómoda y duradera.",
    precio: "$27.990",
  },
  {
    id: 14,
    imagen: "/colchonetaDoite.jpeg",
    titulo: "Colchoneta Doite",
    detalle: "Colchoneta de camping.",
    precio: "$16.990",
  },
  {
    id: 15,
    imagen: "/colchonetaTherm.jpg",
    titulo: "Colchoneta Therm-a-Rest",
    detalle: "Colchoneta aislante.",
    precio: "$140.000",
  },
];

const CategorySacos = () => {
  const navigate = useNavigate();

  const irADetalle = (id) => {
    navigate(`/detalle/${id}`);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Sacos y Colchonetas</h2>
      <div className="row">
        {productos.map((producto) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={producto.id}
          >
            <div className="card" onClick={() => irADetalle(producto.id)}>
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.titulo}
              />
              <div className="card-body">
                <h4 className="card-title">
                  <strong>{producto.titulo}</strong>
                </h4>{" "}
                <p className="card-text">{producto.precio}</p> {/* Agregado el precio */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySacos;

/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles.css";

const CategorySacos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

/*   const irADetalle = (id) => {
    navigate(`/detalle/${id}`);
  }; 
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/productos");
        // Filtrar solo los productos de la categoría "Sacos"
        const sacos = response.data.filter(producto => producto.categoria === "Sacos");
        setProductos(sacos);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center">Categoría: Sacos</h1>
      <div className="row">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div className="col-12 col-md-4 mb-4" key={producto.id}>
              <div className="card">
                <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{producto.titulo}</h5>
                  <p className="card-text">{producto.detalle.substring(0, 100)}...</p>
                  <h6 className="font-weight-bold">{producto.precio}</h6>
                  <Link to={`/detalle/${producto.id}`} className="btn btn-primary">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default CategorySacos; */

