//css
import './ItemProducts.css';

const ItemProducts = ({ title, price, image }) => {

  return(
    <li>
      <div className="contentProduct">
        <div className="imgProduct">
          <img src={image} alt={`Imagen ${image}`}/>
        </div>
        <div className="datsProducts">
          <h3 className="titleProduct">{title}</h3>
          <p className="priceProduct">${price}</p>
          <button type="button" className="btnBasic btnIcoCart">Añadir al carrito</button>
        </div>
      </div>
    </li>
  );
}

export default ItemProducts;
