//Css
import './MainNav.css';

const MainNav = () => {
  return(
    <section className="mainNav">
      <nav className="navBar">
        <ul className="list-items">
          <li className="item-nav"><a href="#">Hombre</a></li>
          <li className="item-nav"><a href="#">Mujer</a></li>
          <li className="item-nav"><a href="#">Junior</a></li>
          <li className="item-nav"><a href="#">Niños</a></li>
          <li className="item-nav"><a href="#">Accesorios</a></li>
          <li className="item-nav"><a href="#">Ofertas</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default MainNav;