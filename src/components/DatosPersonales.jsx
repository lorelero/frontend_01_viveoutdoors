import React, { useState, useContext } from "react";
import { Button, Form, Modal, Container, Row, Col , Card} from "react-bootstrap";
import { AuthContext } from "../context/AuthProvider";

const UserInfo = () => {
  const { user, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    nombre: user?.nombre || "",
    apellido: user?.apellido || "",
    telefono: user?.telefono || "",
    email: user?.email || "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    handleClose();
  };

  return (
    <Container>
      <Row className="mt-4">

      <Card>
      <Card.Header as="h5">Información Personal</Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
        <Row className="m-2">
        <Col md={6}>
        <p><strong>Nombre:</strong> {user?.nombre}</p>
          </Col>
          <Col md={6}>
          <p><strong>Apellido:</strong> {user?.apellido}</p>
          </Col>
      </Row>
      <Row className="m-2">
        <Col md={6}>
        <p><strong>Teléfono:</strong> {user?.telefono}</p>
          </Col>
          <Col md={6}>
          <p><strong>Email:</strong> {user?.email}</p>
          </Col>
      </Row>
        </Card.Text>
         <Button variant="primary" onClick={handleShow}>
          Editar Información
          </Button>
      </Card.Body>
    </Card>
    
  
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Información del Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNombre" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formApellido" className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formTelefono" className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default UserInfo;
