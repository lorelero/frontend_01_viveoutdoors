import { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const MisPublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]); //inicialmente es un arreglo vacío

  // Función para obtener datos desde el backend
  useEffect(() => {
    // se ejecuta después del primer renderizado del componente.
    const obtenerPublicaciones = async () => {
      try {
        const response = await axios.get("http://localhost:3000/publicaciones");
        setPublicaciones(response.data.obtenerPublicaciones || []);
        console.log(
          "Publicaciones obtenidas:",
          response.data.obtenerPublicaciones
        );
      } catch (error) {
        console.error("Error al obtener las publicaciones:", error);
      }
    };
    obtenerPublicaciones();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Mis Publicaciones en el componente</h2>
      <Row>
        {Array.isArray(publicaciones) && publicaciones.length > 0 ? (
          publicaciones.map((publicacion) => (
            <Col
              key={publicacion.id_publicacion}
              sm={12}
              md={12}
              lg={12}
              className="mb-4"
            >
              <Card>
              <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
 className="p-3 m-1"                    //   variant="top"
                    style={{ objectFit: 'contain', width: '100%', height: '200px' }}
                      src={publicacion.producto_imagen} 
                      alt={publicacion.producto_nombre}
                      fluid
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{publicacion.producto_nombre}</Card.Title>
                      <Card.Text>{publicacion.producto_descripcion}</Card.Text>
                      <Card.Text>Precio: {publicacion.precio}</Card.Text>
                      <Card.Text>Stock: {publicacion.stock} unidades disponibles</Card.Text>
                      <Button variant="primary">Ver más</Button>
                    </Card.Body>
                  </Col>
                </Row>
                <Card.Footer>
                  <small className="text-muted">Producto creado: {publicacion.fecha_creacion} ; Última actualización: {publicacion.fecha_actualizacion}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <p>No hay publicaciones disponibles.</p>
        )}
      </Row>
    </div>
  );
};

export default MisPublicaciones;
