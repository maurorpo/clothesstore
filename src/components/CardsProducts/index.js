import React from 'react';
import { useEffect, useState } from "react";

import ItemProducts from "../ItemProducts";
import Loading from '../Loading'

const ProductsHome = ({ addProductCart, handleCart }) => {

  const [products, setProducts] = useState('')
  
  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MCO/search?limit=20&category=MCO1430')
      .then((response) => response.json())
      .then(({results}) =>{
        setProducts(results)
      });
  }, []);

  return(
    <section className="productsList">
      <h2>Productos más buscados</h2>
      
      <ul className="listProducts">
          {
            !products.length ? <Loading /> : products.slice(0,4).map(({id, title, price, thumbnail}) => (
              
              <ItemProducts
                key={id}
                title={title}
                productId={id}
                price={price}
                image={thumbnail}
                addProductCart={addProductCart}
                handleCart={handleCart}
              />
            ))
          }
      </ul>
    </section>
  );
}

export default ProductsHome;