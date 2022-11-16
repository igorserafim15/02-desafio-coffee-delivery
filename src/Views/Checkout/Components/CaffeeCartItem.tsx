import React from 'react'
import { CaffeType } from '../../../@types/CaffeeType'
import { AppContext } from '../../../context/ContextProvider'
import { removeCaffeeCart } from '../../../reduces/checkout/actions'

interface CaffeeItemProps {
  caffee: CaffeType
}

export const CaffeeCartItem = ({ caffee }: CaffeeItemProps) => {
  const { dispatch } = React.useContext(AppContext)

  function handleRemoveCaffeeCart() {
    dispatch(removeCaffeeCart(caffee))
  }

  return (
    <li style={{ margin: '40px' }}>
      <h4>{caffee.title}</h4>
      <p>{caffee.total}</p>
      <button> - </button>
      <span>{caffee.quantity}</span>
      <button> + </button>
      <button onClick={handleRemoveCaffeeCart}>Remover</button>
    </li>
  )
}
