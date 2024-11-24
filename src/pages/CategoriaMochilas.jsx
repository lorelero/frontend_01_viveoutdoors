// src/vistas/CategoryMochilas.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const productos = [
  {
    id: 0,
    imagen: "/mochilaDoite.webp",
    titulo: "Mochila Doite 60L",
    detalle: "Mochila Excursión Monterosa Cad Light Pink 60 Litros Doite",
    precio: "$139.990",
  },
  {
    id: 1,
    imagen: "/mochilaDoite2.webp",
    titulo: "Mochila Doite 37L",
    detalle:
      "Esta mochila es ideal para quienes buscan flexibilidad y espacio. Con acceso superior y diseño expandible, se adapta fácilmente a cualquier situación.",
    precio: "99.990",
  },
  {
    id: 2,
    imagen: "/mochilaDoite3.webp",
    titulo: "Mochila Doite 30L",
    detalle: "MOCHILA ACCION RAKAU NEGRO 30 LITROS DOITE",
    precio: "$79.990",
  },
  {
    id: 3,
    imagen: "/mochilaDoite4.webp",
    titulo: "Mochila Doite 42L",
    detalle: "Mochila Fastpacking Phantom 42 Roja Doite",
    precio: "$95.990",
  },
  {
    id: 4,
    imagen: "/mochilaLippi1.webp",
    titulo: "Mochila Lippi 65L",
    detalle:
      "Mochila de trekking de 65 litros, ideal para tus aventuras y exploraciones en terrenos desconocidos. Diseñada para recorridos donde tú trazas el camino, ofrece un equilibrio perfecto entre simplicidad y robustez. Su construcción reforzada garantiza una confiabilidad excepcional, permitiéndote aventurarte sin preocupaciones, sin importar la distancia o las condiciones.",
    precio: "$127.990",
  },
  {
    id: 5,
    imagen: "/mochilaLippi2.webp",
    titulo: "Mochila Lippi 85L",
    detalle:
      "Mochila de trekking de 85 litros, ideal para tus aventuras y exploraciones en terrenos desconocidos. Diseñada para recorridos donde tú trazas el camino, ofrece un equilibrio perfecto entre simplicidad y robustez. Su construcción reforzada garantiza una confiabilidad excepcional, permitiéndote aventurarte sin preocupaciones, sin importar la distancia o las condiciones.",
    precio: "$145.990",
  },
  {
    id: 6,
    imagen: "/mochilaLippi3.webp",
    titulo: "Mochila Lippi 45L",
    detalle: "Mochila de trekking de 45L, ideal para tus aventuras y exploraciones en terrenos desconocidos. Diseñada para recorridos donde tú trazas el camino, ofrece un equilibrio perfecto entre simplicidad y robustez. Su construcción reforzada garantiza una confiabilidad excepcional, permitiéndote aventurarte sin preocupaciones, sin importar la distancia o las condiciones.",
    precio: "$112.990",
  },
  {
    id: 7,
    imagen: "/mochilaLippi4.webp",
    titulo: "Mochila Lippi 15L",
    detalle: "Nuestro chaleco de hidratación es perfecto para los corredores de Trail running. Además de ser espacioso, con una capacidad para albergar una bolsa de hidratación de 3 litros, es ultraliviano al ser fabricado con telas delgadas y resistentes para una mayor comodidad al momento de practicar el deporte. ¿Se te acabó el líquido? No pasa nada, sus bolsillos son compatibles con botellas estilo soft-flash 300 ml. - Panel dorsal acolchado.",
    precio: "$44.990",
  },
  {
    id: 8,
    imagen: "/moLafuma1.webp",
    titulo: "Mochila Lafuma 30L",
    detalle: "Adopte la comodidad de una espalda ventilada para sus caminatas de uno a tres días con la mochila ACCESS 30 VENTI. Está equipado con una red tensada sobre un marco que permite que el aire circule entre la bolsa y la espalda. Esta mochila duradera utiliza materiales 100% poliéster reciclado para limitar su impacto ambiental. Su diseño totalmente ajustable es ergonómico para optimizar el confort a pesar de la carga. Muy funcional, esta mochila de senderismo ofrece un compartimento para el bolsillo de hidratación así como numerosos bolsillos exteriores.",
    precio: "$100.070",
  },
  {
    id: 9,
    imagen: "/moLafuma2.webp",
    titulo: "Mochila Lafuma 30L",
    detalle: "Equipada con una funda impermeable extraíble para hacer frente a las condiciones cambiantes, la nueva mochila de senderismo ACCESS 30 es ideal para caminatas de dos días con vivac y caminatas con pernoctación en un refugio, pero su volumen no es demasiado grande si se opta por el día. Su combinación de materiales le confiere un aspecto moderno, mientras que el respaldo acolchado y el sistema de transporte ergonómico garantizan un confort incomparable a pesar del peso. Numerosos bolsillos permiten un fácil acceso a sus accesorios esenciales; finalmente, las correas para el equipo debajo de esta mochila de senderismo de 30 L le permiten llevar una tienda de campaña o un colchón.",
    precio: "$72.490",
  },
  {
    id: 10,
    imagen: "/moLafuma3.webp",
    titulo: "Mochila Lafuma 40L",
    detalle: "Si solo hubiera uno… ¡sería este! El Access 40 es adecuado para una caminata de un día o una aventura de 2 a 3 días (con saco de dormir y tienda de campaña). Adecuado tanto para un paseo por las colinas de Praga como para una caminata por los Dolomitas al pie de las Tres Cimas, es sobrio y eficiente con un aspecto moderno. ¡Su nuevo material alveolar es agradable al tacto y destaca! Esta bolsa está repleta de detalles técnicos, como correas recordatorias para sujetarte con seguridad a la espalda, una abertura en la parte inferior de la bolsa para acceder al impermeable en caso de un aguacero repentino, correas que te permiten llevar un saco de dormir o un tienda de campaña, sin olvidar los soportes para postes... El bolsillo de malla en la parte delantera es especialmente inteligente, permite deslizarse y acceder fácilmente a un mapa, a un par de guantes o a un gorro.",
    precio: "$92.990",
  },
  {
    id: 11,
    imagen: "/moLafuma4.webp",
    titulo: "Mochila Lafuma 18L",
    detalle: "Quienes gustan de viajar ligeros eligen la mochila de senderismo ACTIVE 18, una mochila pequeña y flexible que se enrolla para caber en la maleta. Con detalles reflectantes para aumentar tu seguridad cuando viajas en la oscuridad, esta mochila de senderismo de día está equipada con correas ergonómicas para los hombros y una correa para el pecho, que la hacen más estable en tu espalda cuando te acuestas. El diseño funcional de la ligera mochila ACTIVE 18 incluye dos bolsillos de malla en los laterales, que te permiten agarrar fácilmente una botella de agua o una gorra, así como una banda elástica en la parte delantera para guardar tu chaqueta sin perder tiempo.",
    precio: "$49.990",
  },
  {
    id: 12,
    imagen: "/mochilaForclaz1.avif",
    titulo: "Mochila Forclaz 50L",
    detalle: "Mochila 50 L fácil de ajustar para mujeres que hacen senderismo por varios días por la montaña. Buena capacidad para llevar todo lo necesario.",
    precio: "$75.000",
  },
  {
    id: 13,
    imagen: "/mochilaForclaz2.avif",
    titulo: "Mochila Forclaz 60L",
    detalle: "¿Buscas una mochila cómoda y versátil sin sacrificar el peso? La MT500 AIR fue diseñada para ti por nuestro equipo de apasionados.",
    precio: "$120.000",
  },
  {
    id: 14,
    imagen: "/mochilaForclaz3.avif",
    titulo: "Mochila Forclaz 20L",
    detalle: "Nuestros diseñadores, viajeros mochileros, crearon esta mochila compacta auxiliar para llevar las pertenencias esenciales durante las salidas de un día.",
    precio: "$16.000",
  },
  {
    id: 15,
    imagen: "/mochilaForclaz4.avif",
    titulo: "Mochila Forclaz 70L",
    detalle: "Nuestros diseñadores mochileros crearon esta mochila para partir de aventura con total comodidad durante varias semanas.",
    precio: "$110.000",
  },
];

const CategoriaMochilas = () => {
  const navigate = useNavigate();

  const irADetalle = (id) => {
    navigate(`/detalle2/${id}`);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Mochilas</h2>
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
                <p className="card-text">{producto.precio}</p>{" "}
                {/* Agregado el precio */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaMochilas;
