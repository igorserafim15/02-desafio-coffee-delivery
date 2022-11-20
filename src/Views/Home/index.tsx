import React from 'react'
import { CaffeType } from '../../@types/CaffeeType'
import { CaffeeItem } from './Components/CaffeeItem'
import { GridUI } from './styles'

const caffeeMenu: CaffeType[] = [
  {
    id: 1,
    image: 'src/assets/caffee/americano.png',
    category: 'Tradicional',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 2,
    image: 'src/assets/caffee/arabe.png',
    category: 'Tradicional',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 3,
    image: 'src/assets/caffee/capuccino.png',
    category: 'Tradicional',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 4,
    image: 'src/assets/caffee/chocolate-quente.png',
    category: 'Tradicional',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 5,
    image: 'src/assets/caffee/com-leite.png',
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
    image: 'src/assets/caffee/cubano.png',
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
    image: 'src/assets/caffee/expresso-cremoso.png',
    category: 'Tradicional',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 8,
    image: 'src/assets/caffee/expresso.png',
    category: 'Tradicional',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 9,
    image: 'src/assets/caffee/gelado.png',
    category: 'Tradicional',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 10,
    image: 'src/assets/caffee/havaiano.png',
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
    image: 'src/assets/caffee/irlandes.png',
    category: 'Tradicional',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 12,
    image: 'src/assets/caffee/latte.png',
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
    image: 'src/assets/caffee/macchiato.png',
    category: 'Tradicional',
    title: 'EIrlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    quantity: 1,
    total: 9.9,
  },
  {
    id: 14,
    image: 'src/assets/caffee/mocchacino.png',
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
    <GridUI>
      {caffeeMenu.map((caffee) => (
        <CaffeeItem key={caffee.id} caffee={caffee} />
      ))}
    </GridUI>
  )
}
