import { useState, useContext, useEffect } from "react";
import {
  Button,
  Form,
  Modal,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";

const DatosPersonales = () => {
  const { user, setUser, id_usuario, setId_usuario } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const token = localStorage.getItem("token"); // Obtenemos el token del almacenamiento local
  const user1 = JSON.parse(localStorage.getItem("user"));

  console.log("token recibido: ", token);

  console.log("usuario id recibido: ", id_usuario);
  console.log("usuario: ", user);
  console.log("usuario1: ", user1);

   // Configurar los encabezados con el token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/datospersonales/${id_usuario}`,
        formData, //payload
        config //Aquí se pasa la configuración con los encabezados
      );
      setUser(response.data);
      setFormData(response.data); // Actualizamos el formulario con los nuevos datos
      console.log(
        "informacion obtendia del usuario o entregada? ",
        response.data
      );
      handleClose();
    } catch (error) {
      console.error("Error al actualizar la información del usuario", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("User:", user);
      console.log("Token:", token);

      if (!id_usuario || !token) {
        console.error(
          "Faltan datos necesarios para obtener la información del usuario."
        );
        return;
      }


      try {
        const response = await axios.get(
          `http://localhost:3000/datospersonales/${id_usuario}`,
          config
        );
        setFormData(response.data);
        // setFormData({
        //   nombre: response.data.nombre,
        //   apellido: response.data.apellido,
        //   telefono: response.data.telefono,
        //   email: response.data.email,
        // });
        setUser(response.data);
      } catch (error) {
        console.error("Error al obtener la información del usuario", error);
      }
    };
    if (user?.id && token) {
      //aseguramos que user.id y token existan
      fetchUserData();
    }
  }, [id_usuario, setUser, token]); //agrega token a las dependencias

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
                  <p>
                    <strong>Nombre:</strong> {formData.nombre}
                  </p>
                </Col>
                <Col md={6}>
                  <p>
                    <strong>Apellido:</strong> {formData.apellido}
                  </p>
                </Col>
              </Row>
              <Row className="m-2">
                <Col md={6}>
                  <p>
                    <strong>Teléfono:</strong> {formData.telefono}
                  </p>
                </Col>
                <Col md={6}>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
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

export default DatosPersonales;
