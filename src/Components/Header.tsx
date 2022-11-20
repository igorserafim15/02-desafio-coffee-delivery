import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/ContextProvider'

import { UICart, UIHeader, UILocale } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import Logo from '../assets/logo.svg'

export const Header = () => {
  const { caffeeCart } = React.useContext(AppContext)
  return (
    <UIHeader>
      <NavLink to="/">
        <img src={Logo} alt="Logo Caffee Delivery" />
      </NavLink>
      <nav>
        <UILocale>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </UILocale>
        <UICart>
          <NavLink to="/checkout">
            <ShoppingCart size={24} weight="fill" />
            <span>{caffeeCart.length}</span>
          </NavLink>
        </UICart>
      </nav>
    </UIHeader>
  )
}
