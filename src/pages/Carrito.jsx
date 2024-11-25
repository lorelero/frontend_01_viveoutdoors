import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Carrito = () => {
  return (
    <>
      Soy el Carrito de Compras
      <Container fluid style={{ backgroundColor: "green" }}>
        container
        <Row style={{ backgroundColor: "pink" }}>
          <Col
            className="ps-5 pe-5 p-3"
            md={8}
            style={{ backgroundColor: "yellow" }}
          >
            COLUMNA INSIDE DE ROW, YELLOW
            <Card className="text-center">
          
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            <Row>
              <Col md={3} style={{ backgroundColor: "blue" }}>
                {" "}
                {/* Contenido de la columna de 3 */} COLUMNA DE TRES DONDE
                DEBERIA ESTAR LA FOTO DEL PRIMER PRODUCTO{" "}
              </Col>{" "}
              <Col md={9} style={{ backgroundColor: "white" }}>
                {" "}
                {/* Contenido de la columna de 9 */} DETALLE DEL PRODUCTO QUE
                ESTÁ COMPRANDO
              </Col>
            </Row>
          </Col>{" "}
          <Col md={4} style={{ backgroundColor: "orange" }}>
            COLUMNA DE LA IZQUIERDA NARANJA
            {/* Contenido de la columna de 4 */}{" "}
          </Col>{" "}
          FINAL DEL ROW
        </Row>
        FINAL DEL CONTAINER
      </Container>
    </>
  );
};

export default Carrito;
