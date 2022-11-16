import { CaffeType } from '../../@types/CaffeeType'
import { ActionTypes } from './actions'

export function caffeeReducer(state: CaffeType[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_CAFFEE_CART: {
      const has = state.findIndex((i) => i.id === action.payload.addedCaffee.id)
      if (has < 0) return [...state, action.payload.addedCaffee]
      return state
    }
    case ActionTypes.REMOVE_CAFFEE_CART: {
      if (!action.payload.removeCaffee.id) return state
      const withCoffeeRemoved = state.filter((coffee) => {
        return coffee.id !== action.payload.removeCaffee.id
      })
      return withCoffeeRemoved
    }
    default:
      return state
  }
}
