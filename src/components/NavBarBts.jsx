import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRIcons from './CartWidgetRIcons';
import { Link } from 'react-router-dom';

function NavBarBts() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">FullRivadavia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>

            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/nuevos">Nuevos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/ofertas">Ofertas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/mas vendidos">Mas Vendidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <CartWidgetRIcons />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBts;
