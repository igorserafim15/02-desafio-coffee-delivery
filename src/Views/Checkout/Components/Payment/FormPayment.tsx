import { Money } from 'phosphor-react'
import { PaymentUI } from './styles'

export const FormPayment = () => {
  return (
    <PaymentUI>
      <div className="header-section">
        <Money size={28} />
        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
    </PaymentUI>
  )
}
