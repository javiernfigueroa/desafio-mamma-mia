import { useContext } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { FaPizzaSlice, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Context";

const Navbar = () => {
  const { total } = useContext(CartContext);

  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <FaPizzaSlice className="me-2" />
          Desafio Mamma-mia
        </Link>

        {/* Botón del Carrito */}
        <Nav className="ms-auto">
          <Link to="/cart" className="nav-link">
            <FaShoppingCart className="me-2" />
            <i className="bi bi-cart"></i> ${total.toFixed(2)}
          </Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
