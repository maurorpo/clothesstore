import { useState, useEffect} from 'react';

import ItemProducts from '../ItemProducts';
import Loading from '../Loading'


const SearchResults = ({apiSearch, textSearch, handleCart}) => {
  
  const [products, setProduct] = useState('')
  
  useEffect(() => {
    fetch(apiSearch)
      .then((response) => response.json())
      .then(({results}) =>{
        setProduct(results)
      })
  }, [apiSearch])

  
  return(
    <section className="productsList">
      <h2>Resultados de busqueda</h2>
      <h4 className="titleResults">Mostrando <strong>{products.length}</strong> resultados de: <strong>{ textSearch }</strong></h4>
      <ul className="listProducts">
          {!products.length ? <Loading /> :
            products.map(({id, title, price, thumbnail}) => (
              <ItemProducts
                key={id}
                title={title}
                price={price}
                image={thumbnail}
                productId={id}
                handleCart={handleCart}
              />
            ))
          }
      </ul>
    </section>
  );
}

export default SearchResults