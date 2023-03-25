import React from 'react'
import Products from '../components/Products'

function Home () {
  return (
    <div className='container'>
      <h2>Welcome to Redux toolkit store</h2>
      <section>
        <h4>Products</h4>
        <Products />
      </section>
    </div>
  )
}

export default Home
