//Css
import './Footer.css';

const Footer = ({ facebook, twitter, instagram, youtube }) => {
  return(
    <section className="footer">
      <div className="mainContent">
        <div className="sectCatFooter">
          <h2 className="titleCategory">POLÍTICAS</h2>
          <nav className="menuFooter">
            <ul className="listItems">
              <li className="itemMenu"><a href="#">Políticas de privacidad</a></li>
              <li className="itemMenu"><a href="#">Políticas de cambio</a></li>
              <li className="itemMenu"><a href="#">Políticas de envío</a></li>
              <li className="itemMenu"><a href="#">Términos y condiciones</a></li>
              <li className="itemMenu"><a href="#">Responsabilidad social</a></li>
            </ul>
          </nav>
        </div>

        <div className="sectCatFooter">
          <h2 className="titleCategory">SOBRE NOSOTROS</h2>
          <nav className="menuFooter">
            <ul className="listItems">
              <li className="itemMenu"><a href="#">Encuentra tu tienda</a></li>
              <li className="itemMenu"><a href="#">Contáctanos</a></li>
              <li className="itemMenu"><a href="#">Trabaja con nosotros</a></li>
            </ul>
          </nav>
        </div>

        <div className="sectCatFooter">
          <h2 className="titleCategory">SÍGUENOS EN:</h2>
          <nav className="menuFooter">
            <ul className="listItems listItemsSocial">
              <li className="itemMenu">
                <a href="#">
                  <img src={facebook} alt="Icono facebook" />
                </a>
              </li>
              <li className="itemMenu">
                <a href="#">
                  <img src={twitter} alt="Icono facebook" />
                </a>
              </li>
              <li className="itemMenu">
                <a href="#">
                  <img src={instagram} alt="Icono facebook" />
                </a>
              </li>
              <li className="itemMenu">
                <a href="#">
                  <img src={youtube} alt="Icono facebook" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="subContent">
        <h5>© Copyright Colombia. Todos los derechos reservados</h5>
      </div>
    </section>
  );
}

export default Footer;