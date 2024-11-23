
import { Nav } from "react-bootstrap"; // Importar Nav para manejar la navegación
import { LinkContainer } from "react-router-bootstrap"; // Para integrar react-router con Bootstrap Nav

const SidebarAdmin = () => {
  return (
    <div className="bg-dark text-white vh-100 p-3">
      <h2 className="text-center mb-4">Mi Panel</h2>
      <Nav className="flex-column">
      <LinkContainer to="/admin/datos-personales">
          <Nav.Link className="text-white">Datos Personales</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/configurar-cuenta">
          <Nav.Link className="text-white">Configurar mi Cuenta</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/mis-ventas">
          <Nav.Link className="text-white">Mis Ventas</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/mis-publicaciones">
          <Nav.Link className="text-white">Mis Publicaciones</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/cerrar-sesion">
          <Nav.Link className="text-white">Cerrar Sesión</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default SidebarAdmin;
