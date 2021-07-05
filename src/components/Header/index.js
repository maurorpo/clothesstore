import './Header.css'

const Header = ({logo, cart, profile}) => {
  return(
    <section className="header">
      <div className="logo">
        <img src={logo} alt="Logo Clotesstore" />
      </div>
      <div className="searcher">

      </div>

      <div className="elements-header">
        <div className="elementHeader icoCart">
          <img src={cart} alt="Icono carrito" />
        </div>

        <div className="elementHeader icoProfile">
          <img src={profile} alt="Icono perfil" />
        </div>

        <div className="elementHeader login">
          <button type="button" className="btnBasic">Iniciar sección</button>
        </div>
      </div>
    </section>
  );
}

export default Header