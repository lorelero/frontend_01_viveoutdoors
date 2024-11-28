import { useState, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import "../styles.css"; // archivo para estilos personalizados
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";

const Account = () => {
  const URL = import.meta.env.VITE_URL;
  const { isAuthenticated, setToken, login } = useContext(AuthContext); // Asegúrate de usar 'login'

  // Estado para el formulario de registro
  const [registerFormData, setRegisterFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
  });

  // Estado para el formulario de login
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // Estado para mensajes de error
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard"); // Redirige al dashboard tras autenticación
    }
  }, [isAuthenticated, navigate]);

  // Manejador de cambios para el formulario de registro
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
    setErrorMessage(""); // Limpiar mensajes de error en cambios
  };

  // Manejador de cambios para el formulario de login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
    setErrorMessage(""); // Limpiar mensajes de error en cambios
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    if (registerFormData.password !== registerFormData.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      const respuesta = await axios.post(`${URL}/registro`, {
        nombre: registerFormData.nombre,
        apellido: registerFormData.apellido,
        email: registerFormData.email,
        telefono: registerFormData.telefono,
        password: registerFormData.password,
      });
      console.log("Usuario registrado: ", respuesta.data);
      alert("Usuario registrado con éxito");

      // Resetear formulario
      setRegisterFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: "",
        confirmPassword: "",
      });
      setErrorMessage(""); // Limpiar mensajes de error
    } catch (error) {
      console.error("Error al registrar el usuario: ", error);
      setErrorMessage("Error al registrar el usuario. Intenta de nuevo.");
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await axios.post(`${URL}/login`, {
        email: loginFormData.email,
        password: loginFormData.password,
      });

      const { token, user } = respuesta.data;

      if (!token) {
        console.error("No se recibió un token en la respuesta del servidor.");
        setErrorMessage("Error al autenticar, token no válido.");
        return;
      }

      // Usar el método login del contexto
      login(token, user); // Aquí se usa el método login

      // Guardar el token en localStorage y contexto
      localStorage.setItem("token", token);
      setToken(token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      console.log("Respuesta del backend:", respuesta.data);
      console.log("Usuario autenticado:", user);

      // Redirección según el rol
      if (user.rol === "Admin") {
        navigate("/admin/datos-personales");
      } else if (user.rol === "Cliente") {
        navigate("/user/datos-personales");
      } else {
        console.error("Rol desconocido");
        setErrorMessage("Rol de usuario desconocido.");
      }
    } catch (error) {
      console.error("Credenciales incorrectas", error);
      setErrorMessage("Usuario o contraseña incorrectos");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-start">
        <Col md={5} className="mb-4">
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="text-center">Nuevo Cliente</Card.Title>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              <Form onSubmit={handleSubmitRegister}>
                <Form.Group controlId="formNombre" className="mb-3">
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={registerFormData.nombre}
                    onChange={handleRegisterChange}
                    required
                    placeholder="Ingresa tu nombre"
                    className="border-lila"
                  />
                </Form.Group>
                <Form.Group controlId="formApellido" className="mb-3">
                  <Form.Control
                    type="text"
                    name="apellido"
                    value={registerFormData.apellido}
                    onChange={handleRegisterChange}
                    required
                    placeholder="Ingresa tu apellido"
                    className="border-lila"
                  />
                </Form.Group>
                <Form.Group controlId="formTelefono" className="mb-3">
                  <Form.Control
                    type="tel"
                    name="telefono"
                    value={registerFormData.telefono}
                    onChange={handleRegisterChange}
                    required
                    placeholder="Ingresa tu teléfono"
                    className="border-lila"
                  />
                </Form.Group>
                <Form.Group controlId="formEmailRegister" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={registerFormData.email}
                    onChange={handleRegisterChange}
                    required
                    placeholder="Ingresa tu correo electrónico"
                    className="border-lila"
                  />
                </Form.Group>
                <Form.Group controlId="formPasswordRegister" className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    value={registerFormData.password}
                    onChange={handleRegisterChange}
                    required
                    placeholder="Crea una contraseña"
                    className="border-lila"
                  />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={registerFormData.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                    placeholder="Confirma tu contraseña"
                    className="border-lila"
                  />
                </Form.Group>
                <Button
                  variant="dark"
                  type="submit"
                  className="button-custom mt-3"
                >
                  Registrar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <div className="vertical-line"></div>

        <Col md={5} className="mb-4">
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="text-center">Ya Tengo Cuenta</Card.Title>
              <Form onSubmit={handleSubmitLogin}>
                <Form.Group controlId="formEmailLogin" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    value={loginFormData.email}
                    onChange={handleLoginChange}
                    required
                    placeholder="Ingresa tu correo electrónico"
                    className="border-lila"
                  />
                </Form.Group>
                <Form.Group controlId="formPasswordLogin" className="mb-3">
                  <Form.Control
                    type="password"
                    name="password"
                    value={loginFormData.password}
                    onChange={handleLoginChange}
                    required
                    placeholder="Ingresa tu contraseña"
                    className="border-lila"
                  />
                </Form.Group>
                <Button
                  variant="dark"
                  type="submit"
                  className="button-custom mt-3"
                >
                  Iniciar Sesión
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
