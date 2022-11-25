import { MapPin } from 'phosphor-react'
import { AddressUI, InputUI } from './styles'

export const FormAddress = ({ register }: any) => {
  return (
    <AddressUI>
      <div className="header-section">
        <MapPin size={28} />
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <div className="form-section">
        <InputUI
          type="number"
          id="cep"
          placeholder="CEP"
          {...register('cep')}
        />
        <InputUI
          type="text"
          id="street"
          placeholder="Rua"
          {...register('street')}
        />
        <InputUI
          type="number"
          id="number"
          placeholder="Número"
          {...register('number')}
        />
        <InputUI
          type="text"
          id="complement"
          placeholder="Complemento"
          {...register('complement')}
        />
        <InputUI
          type="text"
          id="district"
          placeholder="Bairro"
          {...register('district')}
        />
        <InputUI
          type="text"
          id="city"
          placeholder="Cidade"
          {...register('city')}
        />
        <InputUI type="text" id="uf" placeholder="UF" {...register('uf')} />
      </div>
    </AddressUI>
  )
}
