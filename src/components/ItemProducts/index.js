//css
import './ItemProducts.css';

const ItemProducts = ({ title, price, image, productId, handleCart }) => {
  
  const handleAdd = () => {
    handleCart(productId);
  }

  return(
    <li>
      <div className="contentProduct">
        <div className="imgProduct">
          <img src={image} alt={`Imagen ${image}`}/>
        </div>
        <div className="datsProducts">
          <h3 className="titleProduct">{title}</h3>
          <p className="priceProduct">${price}</p>
          <button onClick={ handleAdd } className="btnBasic btnIcoCart">Añadir al carrito</button>
        </div>
      </div>
    </li>
  );
}

export default ItemProducts;
