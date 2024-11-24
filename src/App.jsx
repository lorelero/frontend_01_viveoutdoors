

import { Routes, Route } from "react-router-dom";

// importar vistas
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CustomNavbar from "./components/Navbar";
import Account from "./components/Account";
import NotFound from "./pages/NotFound";
import CategorySacos from "./pages/CategorySacos";
import DetalleImagen from "./components/DetalleImagen";
import CategoriaMochilas from "./pages/CategoriaMochilas";
import DetalleImagen2 from "./components/DetalleImagen2";

const App = () => {
  return (
    <>
      <CustomNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/CategorySacos" element={<CategorySacos />} />
          <Route path="/detalle/:imagenId" element={<DetalleImagen />} />
          <Route path="/CategoriaMochilas" element={<CategoriaMochilas />} />
          <Route path="/detalle2/:imagenId" element={<DetalleImagen2 />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Ruta para manejar errores */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
