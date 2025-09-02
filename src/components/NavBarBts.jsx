import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRIcons from './CartWidgetRIcons';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function NavBarBts() {
  const { cart } = useContext(CartContext);

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">FullRivadavia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>

            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/nuevos">Nuevos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/ofertas">Ofertas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/mas-vendidos">Mas Vendidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Carrito siempre visible, badge solo si hay productos */}
          <Nav.Link as={NavLink} to="/cart">
            <CartWidgetRIcons />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBts;
