/* eslint-disable no-unused-vars */

import { CaffeType } from '../../@types/CaffeeType'

export enum ActionTypes {
  ADD_CAFFEE_CART = 'ADD_CAFFEE_CART',
  REMOVE_CAFFEE_CART = 'REMOVE_CAFFEE_CART',
}

export function addCaffeeCart(addedCaffee: CaffeType) {
  return {
    type: ActionTypes.ADD_CAFFEE_CART,
    payload: {
      addedCaffee,
    },
  }
}

export function removeCaffeeCart(removeCaffee: CaffeType) {
  return {
    type: ActionTypes.REMOVE_CAFFEE_CART,
    payload: {
      removeCaffee,
    },
  }
}
