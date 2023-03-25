import React, { useEffect } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'

function Products () {
  const dispatch = useDispatch()
  const { data: products, status } = useSelector(state => state.product)
  //   const [products, setProducts] = useState([])

  useEffect(() => {
    dispatch(fetchProducts())
    // fetch(
    //   'https://api.escuelajs.co/api/v1/products/?price_min=800&price_max=1000'
    // )
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setProducts(data)
    //   })
  }, [dispatch])

  const handleAdd = item => {
    dispatch(add(item))
  }

  if (status === STATUSES.LOADING) {
    return (
      <img
        className=' container-fluid  d-flex  justify-content-center '
        style={{ width: '50%' }}
        src='https://i.pinimg.com/originals/24/07/b5/2407b512f6f2eec61cd2f3136242a025.gif'
        alt='loading'
      />
    )
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2 className='container text-center position-absolute top-50  text-danger'>
        {' '}
        Oops! Something went wrong.
      </h2>
    )
  }
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {products.map(product => (
        <div className='col' key={product.id}>
          <div className='card'>
            <img
              src={product.images[0]}
              className='card-img-top'
              alt={product.title}
            />
            <div className='card-body'>
              <h5 className='card-title'>{product.title}</h5>
              <h5> &#8377; {product.price}</h5>
              <p className='card-text'>
                {product.description.length > 80
                  ? product.description.slice(0, 80) + '...'
                  : product.description}
              </p>
              <button
                className='btn btn-primary'
                onClick={() => handleAdd(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
