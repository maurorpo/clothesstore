//Import hooks
import { useEffect, useState } from "react";

//Components
import ItemProducts from "../ItemProducts";

const ProductsHome = () => {
  //Creo estado para los productos
  const [products, setProducts] = useState('')
  

  useEffect(() => {
    //Consumo api de productos categoria "Ropa y accesorios"
    fetch('https://api.mercadolibre.com/sites/MCO/search?limit=20&category=MCO1430')
      .then((response) => response.json())
      .then((json) =>{
        const productsRandom = Math.floor(Math.random(4)* 4 );
        console.log(productsRandom)
        setProducts(json.results)
      });
  }, []); //Dependencia que ejecuta solo una vez el hook

  //Valido el estado productos
  if (products.length === 0 ) {
    return 'No ha consumido el api'
  }

  return(
    <section className="productsList">
      <h2>Productos más buscados</h2>
      <ul className="listProducts">
          {
            products.slice(0,4).map((product) => (
              <ItemProducts key={product.id} title={product.title} price={product.price} image={product.thumbnail} />
            ))
          }
      </ul>
    </section>
  );
}

export default ProductsHome;