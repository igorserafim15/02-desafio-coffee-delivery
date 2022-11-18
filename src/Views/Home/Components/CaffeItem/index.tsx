import React from 'react'
import { CaffeType } from '../../../../@types/CaffeeType'
import { AppContext } from '../../../../context/ContextProvider'
import { addCaffeeCart } from '../../../../reduces/actions'

interface CaffeeItemProps {
  caffee: CaffeType
}

export const CaffeeItem = ({ caffee }: CaffeeItemProps) => {
  const [caffeeState, setCaffeeState] = React.useState(caffee)
  const [quantity, setQuantity] = React.useState(1)
  const { dispatch } = React.useContext(AppContext)

  function handlePlusQuantity() {
    setQuantity(quantity + 1)
    const caffee = {
      ...caffeeState,
      quantity: quantity + 1,
      total: (quantity + 1) * caffeeState.price,
    }
    setCaffeeState(caffee)
  }

  function handleMinosQuantity() {
    setQuantity(quantity - 1)
    const caffee = {
      ...caffeeState,
      quantity: quantity - 1,
      total: (quantity - 1) * caffeeState.price,
    }
    setCaffeeState(caffee)
  }

  function handleAddCaffeeCart() {
    dispatch(addCaffeeCart(caffeeState))
  }

  const { category, title, description, total } = caffeeState

  return (
    <li style={{ margin: '40px' }}>
      <span>{category}</span>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{total}</p>
      <button onClick={handleMinosQuantity}> - </button>
      <span>{quantity}</span>
      <button onClick={handlePlusQuantity}> + </button>
      <div>
        <button onClick={handleAddCaffeeCart}>Comprar</button>
      </div>
    </li>
  )
}
