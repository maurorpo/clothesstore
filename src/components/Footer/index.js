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
              <li className="itemMenu"><button>Políticas de privacidad</button></li>
              <li className="itemMenu"><button>Políticas de cambio</button></li>
              <li className="itemMenu"><button>Políticas de envío</button></li>
              <li className="itemMenu"><button>Términos y condiciones</button></li>
              <li className="itemMenu"><button>Responsabilidad social</button></li>
            </ul>
          </nav>
        </div>

        <div className="sectCatFooter">
          <h2 className="titleCategory">SOBRE NOSOTROS</h2>
          <nav className="menuFooter">
            <ul className="listItems">
              <li className="itemMenu"><button>Encuentra tu tienda</button></li>
              <li className="itemMenu"><button>Contáctanos</button></li>
              <li className="itemMenu"><button>Trabaja con nosotros</button></li>
            </ul>
          </nav>
        </div>

        <div className="sectCatFooter">
          <h2 className="titleCategory">SÍGUENOS EN:</h2>
          <nav className="menuFooter">
            <ul className="listItems listItemsSocial">
              <li className="itemMenu">
                <button>
                  <img src={facebook} alt="Icono facebook" />
                </button>
              </li>
              <li className="itemMenu">
                <button>
                  <img src={twitter} alt="Icono facebook" />
                </button>
              </li>
              <li className="itemMenu">
                <button>
                  <img src={instagram} alt="Icono facebook" />
                </button>
              </li>
              <li className="itemMenu">
                <button>
                  <img src={youtube} alt="Icono facebook" />
                </button>
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