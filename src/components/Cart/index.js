import { useEffect, useState } from 'react';

import './Cart.css'

const Cart = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getProductsId = localStorage.getItem('car')
    const productsCar = JSON.parse(getProductsId)
    const apiCart = `https://api.mercadolibre.com/items?ids=${productsCar}`;

    console.log(productsCar)

    productsCar.length ? (fetch(apiCart)
      .then((response) => response.json())
      .then((json) => setProducts(json))) : setError('No hay productos para buscar')
  }, [])

  const handleDelete = (id) => {
    const spliceProduct = products.filter(({ body: { id: currentId } }) => currentId !== id)
    const productIds = spliceProduct.map(({ body: { id } }) => id)
    setProducts(spliceProduct)
    console.log(products)
    localStorage.setItem('car', JSON.stringify(productIds))
  }

  return (
    <section className="intCart">
      <h1>Carrito de compras</h1>
      <div className="listItemsCart">
        <ul>
          {
            products.length ?  products.map((produ) => (

              <li key={produ.body.id} className="itemProductCart">
                <div className="contentImage itemList">
                  <img src={produ.body.thumbnail} alt="Imagen producto" />
                </div>
                <h4 className="titleProduct itemList">{produ.body.title}</h4>
                <h3 className="priceProduct itemList">${produ.body.price}</h3>
                <div className="actionsContent itemList">
                  <button onClick={() => handleDelete(produ.body.id)}>Eliminar</button>
                </div>
              </li>
            )) : <p>{error || 'no hay productos'}</p>
          }
        </ul>
      </div>
    </section>
  )
}

export default Cart