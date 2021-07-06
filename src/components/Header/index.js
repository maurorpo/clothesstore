//Components
import Search from '../Search';
import './Header.css'

const Header = ({logo, cart, profile, search, searchInput, textSearch}) => {
  return(
    <section className="header">
      <div className="logo">
        <img src={logo} alt="Logo Clotesstore" />
      </div>
      
      <div className="searcher">
        <Search search={search} searchInput={searchInput} textSearch={textSearch} />
      </div>

      <div className="elements-header">
        <div className="elementHeader icoCart">
          <img src={cart} alt="Icono carrito" />
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