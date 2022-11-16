import { useContext } from 'react'
import { AppContext } from '../../context/ContextProvider'
import { CaffeeCartItem } from './Components/CaffeeCartItem'

export const Checkout = () => {
  const { caffeeCart } = useContext(AppContext)

  const subtotal = 50
  // caffeeCart
  //   .map((item) => item.total)
  //   .reduce((acc, item) => acc + item)
  const delivery = 3.5
  const total = subtotal + delivery

  return (
    <div>
      <ul>
        {caffeeCart.map((caffee) => (
          <CaffeeCartItem key={caffee.id} caffee={caffee} />
        ))}
      </ul>
      <hr />
      <div style={{ margin: '40px' }}>
        <p>Total de itens: {caffeeCart.length}</p>
        <p>Entrega: {delivery}</p>
        <strong>Total: {total}</strong>
        <div>
          <button>Confirmar</button>
        </div>
      </div>
    </div>
  )
}
