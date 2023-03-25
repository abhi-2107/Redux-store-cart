import React from 'react'
import { remove } from '../store/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
function Cart () {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart)
  const handleRemove = itemId => {
    dispatch(remove(itemId))
  }
  return (
    <div className='container'>
      <h3>Cart</h3>
      <table className='table align-middle'>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Detail</th>
            <th>Price(Rs)</th>
            <th>Remove Product</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <img
                  className='img-fluid img-thumbnail'
                  style={{ width: '200px' }}
                  src={product.images[0]}
                  alt={product.title}
                />
              </td>
              <td>
                <h5>{product.title}</h5>
              </td>
              <td>
                <h5>{product.price} &#8377; </h5>
              </td>
              <td>
                {' '}
                <button
                  className='btn btn-danger'
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cart
