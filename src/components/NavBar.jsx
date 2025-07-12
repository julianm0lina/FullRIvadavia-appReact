import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">MiTienda</div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
