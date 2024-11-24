// src/components/DetalleImagen.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Home from "../pages/Home";

const productos = [
  {
    id: 0,
    imagen: "/saco.webp",
    titulo: "Saco de Dormir Lafuma Active 0º C",
    detalle: "Durante las noches en refugios no vigilados en invierno y en los vivacs en altura en verano, el saco de dormir ACTIVE 0° proporciona el confort acogedor y la facilidad de su excelente diseño. Su forma de sarcófago optimiza su aporte térmico al tiempo que reduce su peso (sólo 1,2 kg), la construcción multicapa garantiza calidez general sin puntos fríos. Con una gran cremallera bidireccional para facilitar su uso, este bolso te envuelve en calidez gracias a su capucha ajustable preformada y su cuello aislante. Cremallera bidireccional para crear ventilación, cremalleras fosforescentes... los cuidados detalles y el aislamiento reciclado más respetuoso con el medio ambiente completan este saco de dormir imprescindible para los aventureros.",
    precio: "$72.990",
  },
  {
    id: 1,
    imagen: "/sacoLafuma.jpg",
    titulo: "Saco de Dormir Lafuma Nunavut Kid",
    detalle: "¡a los pequeños aventureros de la naturaleza les encanta nunavüt kid, el saco de dormir para niños de lafuma! guardado en su mochila, que permite llevarlo fácilmente de vacaciones o con amigos, este ingenioso saco de dormir, diseñado para temperaturas frescas (5°c), está repleto de características funcionales. una forma rectangular muy cómoda, en primer lugar, con una gran cremallera antiatrapamiento de doble sentido a cada lado, para poder modular la ventilación. el aislamiento reciclado es resistente a la humedad y una solapa anti-frío también garantiza que tu pequeño aventurero se mantenga abrigado. por último, un bolsillo interior para guardar la linterna o las gafas, un bolsillo para guardar un jersey a modo de almohada y tiradores de cremallera fosforescentes completan este saco de dormir infantil.",
    precio: "$70.000",
  },
  {
    id: 2,
    imagen: "/sacoDoite1.jpg",
    titulo: "Saco de Dormir Summit Naranjo Doite",
    detalle: "Descubre el Saco de Dormir Profesional Tipo Momia, diseñado para aventureros que buscan confort y calidez. Su diseño ergonómico minimiza el espacio y retiene el calor, mientras que los materiales ligeros y de alta calidad garantizan un rendimiento excepcional en condiciones frías. Con costuras reforzadas y excelente aislante, es perfecto para acampadas en climas fríos.",
    precio: "$89.990",
  },
  {
    id: 3,
    imagen: "/sacoLippi.webp",
    titulo: "Saco de Dormir Lippi X-Perience 0° Steam-Pro",
    detalle: "X-perience 0° es un saco muy versátil, ideal para viajar con libertad y realizar excursiones de media montaña. Está relleno con sintético Steam-Pro, que proporciona una excelente capacidad térmica y comodidad. Su diseño adaptable lo convierte en una opción práctica y confiable para diversas salidas a la montaña.",
    precio: "$74.990",
  },
  {
    id: 4,
    imagen: "/colchoneta-z-lite.jpg",
    titulo: "Colchoneta Therm-a-Rest Z-Lite",
    detalle: "Thermarest Z Lite R es una colchoneta de viaje plegable compacta de la serie Fast&Light fabricada en espuma de polietileno de celda cerrada. Gracias al diseño original, algo similar a una bandeja de huevos, la estera se puede plegar como un acordeón, reduciendo significativamente las dimensiones de transporte. Cuando está plegada, la alfombra puede funcionar como asiento.",
    precio: "$65.000",
  },
  {
    id: 5,
    imagen: "/ColchonetaLippi.jpg",
    titulo: "Colchoneta Lippi Corus Foam Matt Rojo V20",
    detalle: "La Colchoneta Corus Lippi Foam Matt Rojo V20 es un aislante que proporciona comodidad y protección contra el frío, al aislar el cuerpo de la tierra húmeda o terrenos fríos. Cuenta con concavidades de material reflectante que ayudan a retener el calor corporal y una espuma de alta densidad, construida en dos fases, que retarda la pérdida de calor. Este producto está diseñado para ofrecer calidez, durabilidad y confort..",
    precio: "$27.990",
  },
  {
    id: 6,
    imagen: "/colchonetaDoite.jpeg",
    titulo: "Colchoneta Liviana Geo Wavy Gris Doite",
    detalle: "Detalle: Ligero, suave y con buena resiliencia, ofrece excelente aislamiento térmico e impermeabilización. Compacto y fácil de plegar, ideal para empacar, acampar en automóviles y acampar mínimamente.",
    precio: "$16.990",
  },
  {
    id: 7,
    imagen: "/colchonetaTherm.jpg",
    titulo: "Colchoneta Therm-a-rest Trail Pro",
    detalle:
      "Colchoneta autoinflable Para una comodidad sin precedentes durante sus aventuras en el campo, el Trail Pro brinda calidez durante todo el año y el soporte legendario Therm-a-Rest. La espuma autoinflable mide 7,6 cm y presenta la construcción StrataCore, un diseño que brinda la mejor relación calidez-peso de cualquier construcción de espuma autoinflable.",
    precio: "$140.000",
  },
  // Nuevos productos añadidos
  {
    id: 8,
    imagen: "/saco.webp",
    titulo: "Saco de Dormir Lafuma Active 0º C",
    detalle: "Durante las noches en refugios no vigilados en invierno y en los vivacs en altura en verano, el saco de dormir ACTIVE 0° proporciona el confort acogedor y la facilidad de su excelente diseño. Su forma de sarcófago optimiza su aporte térmico al tiempo que reduce su peso (sólo 1,2 kg), la construcción multicapa garantiza calidez general sin puntos fríos. Con una gran cremallera bidireccional para facilitar su uso, este bolso te envuelve en calidez gracias a su capucha ajustable preformada y su cuello aislante. Cremallera bidireccional para crear ventilación, cremalleras fosforescentes... los cuidados detalles y el aislamiento reciclado más respetuoso con el medio ambiente completan este saco de dormir imprescindible para los aventureros.",
    precio: "$72.990",
  },
  {
    id: 9,
    imagen: "/sacoLafuma.jpg",
    titulo: "Saco de Dormir Lafuma Nunavut Kid",
    detalle: "¡a los pequeños aventureros de la naturaleza les encanta nunavüt kid, el saco de dormir para niños de lafuma! guardado en su mochila, que permite llevarlo fácilmente de vacaciones o con amigos, este ingenioso saco de dormir, diseñado para temperaturas frescas (5°c), está repleto de características funcionales. una forma rectangular muy cómoda, en primer lugar, con una gran cremallera antiatrapamiento de doble sentido a cada lado, para poder modular la ventilación. el aislamiento reciclado es resistente a la humedad y una solapa anti-frío también garantiza que tu pequeño aventurero se mantenga abrigado. por último, un bolsillo interior para guardar la linterna o las gafas, un bolsillo para guardar un jersey a modo de almohada y tiradores de cremallera fosforescentes completan este saco de dormir infantil.",
    precio: "$70.000",
  },
  {
    id: 10,
    imagen: "/sacodoite.webp",
    titulo: "Saco de Dormir Glaciar Azul Doite",
    detalle: "Diseñado para proporcionar mayor comodidad y calidez. El cierre 3/4 facilita la ventilazión. Los cierres bidireccionales y el tubo acolchado evitan que el aire se cuele y que el tejidos se enganche. Saco de Dormir Profesional Tipo Momia, diseñado para aventureros que buscan confort y calidez. Su diseño ergonómico minimiza el espacio y retiene el calor, mientras que los materiales ligeros y de alta calidad garantizan un rendimiento excepcional en condiciones frías. Con costuras reforzadas y excelente aislante, es perfecto para acampadas en climas fríos.",
    precio: "$89.990",
  },
  {
    id: 11,
    imagen: "/sacoLippi.webp",
    titulo: "Saco de Dormir Lippi X-Perience 0° Steam-Pro",
    detalle: "X-perience 0° es un saco muy versátil, ideal para viajar con libertad y realizar excursiones de media montaña. Está relleno con sintético Steam-Pro, que proporciona una excelente capacidad térmica y comodidad. Su diseño adaptable lo convierte en una opción práctica y confiable para diversas salidas a la montaña..",
    precio: "$74.990",
  },
  {
    id: 12,
    imagen: "/colchoneta-z-lite.jpg",
    titulo: "Colchoneta Therm-a-Rest Z-Lite",
    detalle: "Thermarest Z Lite R es una colchoneta de viaje plegable compacta de la serie Fast&Light fabricada en espuma de polietileno de celda cerrada. Gracias al diseño original, algo similar a una bandeja de huevos, la estera se puede plegar como un acordeón, reduciendo significativamente las dimensiones de transporte. Cuando está plegada, la alfombra puede funcionar como asiento..",
    precio: "$65.000",
  },
  {
    id: 13,
    imagen: "/ColchonetaLippi.jpg",
    titulo: "Colchoneta Lippi Corus Foam Matt Rojo V20",
    detalle: "La Colchoneta Corus Lippi Foam Matt Rojo V20 es un aislante que proporciona comodidad y protección contra el frío, al aislar el cuerpo de la tierra húmeda o terrenos fríos. Cuenta con concavidades de material reflectante que ayudan a retener el calor corporal y una espuma de alta densidad, construida en dos fases, que retarda la pérdida de calor. Este producto está diseñado para ofrecer calidez, durabilidad y confort..",
    precio: "$27.990",
  },
  {
    id: 14,
    imagen: "/colchonetaDoite.jpeg",
    titulo: "Colchoneta Liviana Geo Wavy Gris Doite",
    detalle: "Ligero, suave y con buena resiliencia, ofrece excelente aislamiento térmico e impermeabilización. Compacto y fácil de plegar, ideal para empacar, acampar en automóviles y acampar mínimamente.",
    precio: "$16.990",
  },
  {
    id: 15,
    imagen: "/colchonetaTherm.jpg",
    titulo: "Colchoneta Therm-a-rest Trail Pro",
    detalle:
      "Colchoneta autoinflable Para una comodidad sin precedentes durante sus aventuras en el campo, el Trail Pro brinda calidez durante todo el año y el soporte legendario Therm-a-Rest. La espuma autoinflable mide 7,6 cm y presenta la construcción StrataCore, un diseño que brinda la mejor relación calidez-peso de cualquier construcción de espuma autoinflable.",
    precio: "$140.000",
  },
];

const DetalleImagen = () => {
  const { imagenId } = useParams();
  const navigate = useNavigate();
  const producto = productos[imagenId];

  const irADetalle = (id) => {
    navigate(`/detalle/${id}`);
  };

  const irACategoria = () => {
    navigate("/CategorySacos");
  };
  const irAHome = () => {
    navigate("/");
  };

  const productoAnterior = Number(imagenId) > 0 ? Number(imagenId) - 1 : 0;
  const productoSiguiente =
    Number(imagenId) < productos.length - 1
      ? Number(imagenId) + 1
      : productos.length - 1;

  return (
    <div className="container my-5">
      {/* Submenú */}
      <div className="mb-4">
        <button className="btn btn-link " style={{ color: 'gray' }} onClick={irAHome}>
          Home/
        </button>
        <button
          className="btn btn-link"
          style={{ color: 'orange', marginLeft: "-15px" }}
          onClick={irACategoria}
        >
          Volver a Sacos y Colchonetas
        </button>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img
            src={producto.imagen}
            alt={producto.titulo}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>{producto.titulo}</h2>
          <p>
            <strong>Detalle:</strong> {producto.detalle}
          </p>
          <p>
            <strong>Precio:</strong>{" "}
            <span style={{ fontWeight: "bold", fontSize: "2em" }}>
              {producto.precio}
            </span>
          </p>
          <button className="btn btn-dark mt-3">Agregar al carrito</button>
        </div>
      </div>

      <div className="mt-4">
        <button
          className="btn btn-secondary me-2"
          onClick={() => irADetalle(productoAnterior)}
        >
          Atrás
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => irADetalle(productoSiguiente)}
        >
          Adelante
        </button>
      </div>
    </div>
  );
};

export default DetalleImagen;

/*import React, { useContext } from "react";
import { useParams, useNavigate, useEffect, useState } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import "../styles.css";



const DetalleVista = () => {
  const { imagenId } = useParams();
  const navigate = useNavigate();
  const { agregarCarrito } = useCart(); // Usar el contexto del carrito
  const [producto, setProducto] = useState(null);
  const [loading, setloading]= useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/productos");
        const productos = response.data;
        const foundProducto = productos.find(
          (p) => p.id === parseInt(imagenId)
        );
        setProducto(foundProducto);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
     } finally {
        setLoading(false); // Cambiar el estado de carga
      }
    };

    fetchProducto();
  }, [imagenId]);

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  const irACategoria = () => {
    navigate("/CategorySacos");
  };

  const irAHome = () => {
    navigate("/");
  };

  const agregarAlCarrito = () => {
    agregarCarrito(producto); // Agregar el producto al carrito
    alert(`Agregado al carrito: ${producto.titulo} por ${producto.precio}`);
  };

  const productoAnterior = producto.id > 0 ? producto.id - 1 : 0;
  const productoSiguiente = producto.id < 15 ? producto.id + 1 : 15; // Cambia 15 por la cantidad total de productos

  return (
    <div className="container my-5">
      {/* Submenú }
      <div className="mb-4">
        <button
          className="btn btn-link"
          style={{ color: "gray" }}
          onClick={irAHome}
        >
          Home/
        </button>
        <button
          className="btn btn-link"
          style={{ color: "orange", marginLeft: "-15px" }}
          onClick={irACategoria}
        >
          Volver a Sacos y Colchonetas
        </button>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src={producto.imagen}
            className="img-fluid"
            alt={producto.titulo}
          />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="font-weight-bold">{producto.titulo}</h2>
          <p>{producto.detalle}</p>
          <h4 className="font-weight-bold">{producto.precio}</h4>
          <button className="btn btn-dark" onClick={agregarAlCarrito}>
            Agregar al carrito
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between my-4">
        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/detalle/${productoAnterior}`)}
        >
          Atrás
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/detalle/${productoSiguiente}`)}
        >
          Adelante
        </button>
      </div>
    </div>
  );
};

export default DetalleVista; */
