import { useState, useEffect } from "react";
import { Card, Row, Col, Badge, Spinner } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

const MisVentas = () => {
  const URL = import.meta.env.VITE_URL;
  //const navigate = useNavigate();
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  const obtenerVentas = async () => {
    try {
      const response = await axios.get(`${URL}/ventas`);
      setVentas(response.data.getVentas || []);
      console.log(
        "Ventas obtenidas respuesta del axios:",
        response.data.getVentas
      );
    } catch (error) {
      console.error("Error al obtener las ventas:", error);
      setError(
        "Hubo un problema al cargar las ventas. Intenta de nuevo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerVentas();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" /> Cargando ventas...
      </div>
    );
  }

  if (error) {
    return <div className="text-danger text-center">{error}</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Mis Ventas</h2>
      </div>

      <Row>
        {Array.isArray(ventas) && ventas.length > 0 ? (
          ventas.map((venta) => (
            <Col key={venta.n_pedido} sm={12} md={12} lg={12} className="mb-4">
              <Card>
                <Row className="g-0">
                  <Col md={6}>
                    <Card.Body>
                      <Card.Title>
                        Número de pedido: {venta.n_pedido}
                      </Card.Title>
                      <Card.Text>
                        Fecha del pedido: {venta.fecha_pedido}
                      </Card.Text>
                      <h5>
                        <Badge bg="danger">
                          Total del pedido: {venta.total}
                        </Badge>
                      </h5>
                    </Card.Body>
                  </Col>
                  <Col md={6}>
                    <Card.Body>
                      <Card.Text>
                        Nombre de Cliente: {venta.nombre} {venta.apellido}
                      </Card.Text>
                      <Card.Text>Email: {venta.email}</Card.Text>
                      <Card.Text>Teléfono: {venta.teléfono}</Card.Text>
                      <Card.Text>
                        Dirección: {venta.dirección} {venta.ciudad}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))
        ) : (
          <p>No hay ventas disponibles.</p>
        )}
      </Row>
    </div>
  );
};

export default MisVentas;
