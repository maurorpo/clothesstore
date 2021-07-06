//Hooks
import { useState, useEffect} from 'react';

//Components
import ItemProducts from '../ItemProducts';
import Loading from '../Loading'


const SearchResults = ({apiSearch, textSearch}) => {
  
  const [products, setProduct] = useState('') //Estado de productos
  
  useEffect(() => {
    fetch(apiSearch)
      .then((response) => response.json())
      .then((json) =>{
        setProduct(json.results)
      })
  }, [apiSearch])

  if ( products.length === 0 ) {
    return <Loading />
  }
  
  return(
    <section className="productsList">
      <h2>Resultados de busqueda</h2>
      <h4 className="titleResults">Mostrando <strong>{products.length}</strong> resultados de: <strong>{ textSearch }</strong></h4>
      <ul className="listProducts">
          {
            products.map((product) => (
              <ItemProducts key={product.id} title={product.title} price={product.price} image={product.thumbnail} />
            ))
          }
      </ul>
    </section>
  );
}

export default SearchResults