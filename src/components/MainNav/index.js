//Css
import './MainNav.css';

const MainNav = () => {
  return(
    <section className="mainNav">
      <nav className="navBar">
        <ul className="list-items">
          <li className="item-nav"><button>Hombre</button></li>
          <li className="item-nav"><button>Mujer</button></li>
          <li className="item-nav"><button>Junior</button></li>
          <li className="item-nav"><button>Niños</button></li>
          <li className="item-nav"><button>Accesorios</button></li>
          <li className="item-nav"><button>Ofertas</button></li>
        </ul>
      </nav>
    </section>
  );
}

export default MainNav;