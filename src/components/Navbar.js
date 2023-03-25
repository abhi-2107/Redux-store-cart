import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar () {
  const items = useSelector(state => state.cart)
  return (
    <nav className='navbar navbar-expand bg-body-tertiary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          REDUX STORE
        </Link>

        <div>
          <ul className='navbar-nav '>
            <li className='nav-item'>
              <Link className='nav-link ' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/cart'>
                Cart
              </Link>
            </li>
            <li className='nav-item'>
              <span className='nav-link active fw-bold cartCount'>
                Cart items : {items.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
