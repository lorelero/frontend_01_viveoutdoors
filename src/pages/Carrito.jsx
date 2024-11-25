import { Container, Row, Col, Card, Button, ListGroup} from "react-bootstrap";

const Carrito = () => {
  return (
    <>
      Soy el Carrito de Compras
      <Container fluid style={{ backgroundColor: "green" }}>
        container
        <Row style={{ backgroundColor: "pink" }}>
          <Col
            className="ps-3 pe-3 p-3"
            md={8}
            style={{ backgroundColor: "yellow" }}
          >
            COLUMNA INSIDE DE ROW, YELLOW
            <Card className="">
              <Row className="g-0">
                <Col md={3} style={{ backgroundColor: "blue" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                </Col>

                <Col md={9} style={{ backgroundColor: "white" }}>
                  <Card.Body>
                    <Card.Title>Nombre</Card.Title>
                    <Card.Text> Precio $ </Card.Text>
                    <Row className="g-0 d-flex justify-content-between">
                      <Col className=" justify-content-start">
                        <Button variant="outline-danger" size="sm">
                          Eliminar Producto
                        </Button>
                      </Col>

                      <Col className="d-flex justify-content-end">
                        <Button className="me-1" variant="secondary">
                          - 1
                        </Button>
                        <Button
                          className="me-1"
                          variant="outline-success"
                          disabled
                        >
                          1Contador
                        </Button>
                        <Button className="me-1" variant="info">
                          + 1
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={4} style={{ backgroundColor: "orange" }}>
            <Card>
              
              <Card.Header>Resumen de Compra</Card.Header>
              <ListGroup variant="flush">
                
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  
                  Productos <span>$valor</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  
                  Envíos <span>$2.000</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  
                  Descuentos <span>$0</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                
                  Total <span>$Total</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  
                  <Button variant="primary" className="w-100">
                    Pagar
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          FINAL DEL ROW
        </Row>
        FINAL DEL CONTAINER
      </Container>
    </>
  );
};

export default Carrito;
