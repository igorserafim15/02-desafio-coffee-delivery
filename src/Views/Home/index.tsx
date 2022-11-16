import React from 'react'
import { CaffeType } from '../../@types/CaffeeType'
import { CaffeeItem } from './Components/CaffeItem'

const caffeeMenu: CaffeType[] = [
  {
    id: 1,
    image: '',
    category: 'Tradicional',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 2,
    image: '',
    category: 'Tradicional',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 3,
    image: '',
    category: 'Tradicional',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 4,
    image: '',
    category: 'Tradicional',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 5,
    image: '',
    category: 'Tradicional',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 6,
    image: '',
    category: 'Tradicional',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 7,
    image: '',
    category: 'Tradicional',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 8,
    image: '',
    category: 'Tradicional',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 9,
    image: '',
    category: 'Tradicional',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 10,
    image: '',
    category: 'Tradicional',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 11,
    image: '',
    category: 'Tradicional',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 12,
    image: '',
    category: 'Tradicional',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 13,
    image: '',
    category: 'Tradicional',
    title: 'EIrlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 14,
    image: '',
    category: 'Tradicional',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
]

export const Home = () => {
  return (
    <div>
      <ul>
        {caffeeMenu.map((caffee) => (
          <CaffeeItem key={caffee.id} caffee={caffee} />
        ))}
      </ul>
    </div>
  )
}
