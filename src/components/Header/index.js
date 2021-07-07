import { Link } from "react-router-dom";

//Components
import Search from '../Search';
import './Header.css'

const Header = ({logo, cart, profile, search, searchInput, textSearch, countCart }) => {
  
  return(
    <section className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Clotesstore" />
        </Link>
      </div>
      
      <div className="searcher">
        <Search search={search} searchInput={searchInput} textSearch={textSearch} />
      </div>

      <div className="elements-header">
        <div className="elementHeader icoCart">
          <Link to="/cart">
            <div className="cartCount">{countCart}</div>
            <img src={cart} alt="Icono carrito" />
          </Link>
        </div>

        <div className="elementHeader icoProfile">
          <img src={profile} alt="Icono perfil" />
        </div>

        <div className="elementHeader login">
          <button type="button" className="btnBasic">Iniciar sesión</button>
        </div>
      </div>
    </section>
  );
}

export default Header