import { CaffeType } from '../@types/CaffeeType'
import { ActionTypes } from './actions'

export function caffeeReducer(state: CaffeType[], action: any) {
  switch (action.type) {
    /**
     * add caffee cart
     */
    case ActionTypes.ADD_CAFFEE_CART: {
      const has = state.findIndex((i) => i.id === action.payload.caffeeAdded.id)
      if (has < 0) return [...state, action.payload.caffeeAdded]
      return state
    }
    /**
     * remove caffee cart
     */
    case ActionTypes.REMOVE_CAFFEE_CART: {
      if (!action.payload.caffeeRemoved.id) return state
      const withCoffeeRemoved = state.filter((coffee) => {
        return coffee.id !== action.payload.caffeeRemoved.id
      })
      return withCoffeeRemoved
    }
    /**
     * update caffee cart
     */
    case ActionTypes.UPDATE_CAFFEE_CART: {
      const update = state.map((caffee) => {
        if (action.payload.caffeeUpdated.id !== caffee.id) return caffee
        return action.payload.caffeeUpdated
      })
      return update
    }
    /**
     * default
     */
    default:
      return state
  }
}
