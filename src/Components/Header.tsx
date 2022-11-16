import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/ContextProvider'

export const Header = () => {
  const { caffeeCart } = React.useContext(AppContext)
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/checkout">
          Carrinho <span>{caffeeCart.length}</span>
        </NavLink>
      </nav>
    </header>
  )
}
