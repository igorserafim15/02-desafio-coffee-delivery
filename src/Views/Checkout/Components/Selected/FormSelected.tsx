import { useContext } from 'react'
import { AppContext } from '../../../../context/ContextProvider'
import { priceFormatter } from '../../../../utils/formatter'
import { CaffeeCartItem } from '../Cart/Cart'
import { SelectedUI } from './styles'

export const FormSelected = () => {
  const { caffeeCart } = useContext(AppContext)

  const delivery = 3.5
  function total() {
    const subtotal = caffeeCart.reduce((acc, item) => {
      return acc + item.total
    }, 0)
    return subtotal
  }

  return (
    <SelectedUI>
      <ul>
        {caffeeCart.map((caffee) => (
          <CaffeeCartItem key={caffee.id} caffee={caffee} />
        ))}
      </ul>
      <div>
        <p>
          Total de itens: <span>{priceFormatter(total())}</span>
        </p>
        <p>
          Entrega: <span>{priceFormatter(delivery)}</span>
        </p>
        <strong className="total">
          Total: <span>{priceFormatter(total() + delivery)}</span>
        </strong>
        <button className="button-confirm">Confirmar pedido</button>
      </div>
    </SelectedUI>
  )
}
