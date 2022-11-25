import { FormAddress } from './Components/Address/FormAddress'
import { FormPayment } from './Components/Payment/FormPayment'
import { FormUI, GridUI } from './styles'
import { useForm } from 'react-hook-form'
import { FormSelected } from './Components/Selected/FormSelected'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  cep: z.string().min(8, 'Informe um CEP válido'),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  uf: z.string(),
})

type FormAddressData = z.infer<typeof schema>

export const Checkout = () => {
  const { register, handleSubmit, formState } = useForm<FormAddressData>({
    resolver: zodResolver(schema),
  })

  console.log(formState.errors)

  function handleOrderCaffee(data: FormAddressData) {
    console.log(data)
  }

  return (
    <GridUI onSubmit={handleSubmit(handleOrderCaffee)}>
      <FormUI>
        <FormAddress register={register} />
        <FormPayment />
      </FormUI>
      <FormSelected />
    </GridUI>
  )
}
