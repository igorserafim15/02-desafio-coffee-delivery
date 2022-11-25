import { Trash } from 'phosphor-react'
import React from 'react'
import { CaffeType } from '../../../../@types/CaffeeType'
import { AppContext } from '../../../../context/ContextProvider'
import { removeCaffeeCart, updateCaffeeCart } from '../../../../reduces/actions'
import { priceFormatter } from '../../../../utils/formatter'
import { CaffeeCartItemUI, ChangeCountUI, ContentUI } from './styles'

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

  const { image, title, total } = caffeeState

  return (
    <CaffeeCartItemUI>
      <div>
        <img src={image} alt={title} />
      </div>
      <ContentUI>
        <h4>
          {title} <strong>{priceFormatter(total)}</strong>
        </h4>
        <ChangeCountUI>
          <div>
            <button onClick={handleMinosQuantity}> - </button>
            <span>{quantity}</span>
            <button onClick={handlePlusQuantity}> + </button>
          </div>
          <button onClick={handleRemoveCaffeeCart}>
            <Trash size={24} />
            REMOVER
          </button>
        </ChangeCountUI>
      </ContentUI>
    </CaffeeCartItemUI>
  )
}
