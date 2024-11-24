
import { Routes, Route } from "react-router-dom";

// importar vistas
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CustomNavbar from "./components/Navbar";
import Account from "./pages/Account";


const App = () => {
  return (
    <>
      <CustomNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          <Route path="/admin/*" element={<AdminDashboard />} /> {/* Notar el "/*"  en la ruta permite que React Router maneje subrutas dentro de AdminDashboard.*/ }
          <Route path="/user/*" element={<UserDashboard />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
