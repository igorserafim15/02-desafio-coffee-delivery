import React from 'react'
import { CaffeType } from '../../../@types/CaffeeType'
import { AppContext } from '../../../context/ContextProvider'
import { removeCaffeeCart, updateCaffeeCart } from '../../../reduces/actions'

interface CaffeeItemProps {
  caffee: CaffeType
}

export const CaffeeCartItem = ({ caffee }: CaffeeItemProps) => {
  const [caffeeState, setCaffeeState] = React.useState(caffee)
  const [quantity, setQuantity] = React.useState(caffee.quantity)
  const { dispatch } = React.useContext(AppContext)

  function handlePlusQuantity() {
    setQuantity(quantity + 1)
    const caffee = {
      ...caffeeState,
      quantity: quantity + 1,
      total: (quantity + 1) * caffeeState.price,
    }
    setCaffeeState(caffee)
    dispatch(updateCaffeeCart(caffee))
  }

  function handleMinosQuantity() {
    setQuantity(quantity - 1)
    const caffee = {
      ...caffeeState,
      quantity: quantity - 1,
      total: (quantity - 1) * caffeeState.price,
    }
    setCaffeeState(caffee)
    dispatch(updateCaffeeCart(caffee))
  }

  function handleRemoveCaffeeCart() {
    dispatch(removeCaffeeCart(caffee))
  }

  const { title, total } = caffeeState

  return (
    <li style={{ margin: '40px' }}>
      <h4>{title}</h4>
      <p>{total}</p>
      <button onClick={handleMinosQuantity}> - </button>
      <span>{quantity}</span>
      <button onClick={handlePlusQuantity}> + </button>
      <button onClick={handleRemoveCaffeeCart}>Remover</button>
    </li>
  )
}
