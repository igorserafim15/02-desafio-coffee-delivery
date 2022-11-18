/* eslint-disable no-unused-vars */

import { CaffeType } from '../@types/CaffeeType'

export enum ActionTypes {
  ADD_CAFFEE_CART = 'ADD_CAFFEE_CART',
  REMOVE_CAFFEE_CART = 'REMOVE_CAFFEE_CART',
  UPDATE_CAFFEE_CART = 'UPDATE_CAFFEE_CART',
}

export function addCaffeeCart(caffeeAdded: CaffeType) {
  return {
    type: ActionTypes.ADD_CAFFEE_CART,
    payload: {
      caffeeAdded,
    },
  }
}

export function removeCaffeeCart(caffeeRemoved: CaffeType) {
  return {
    type: ActionTypes.REMOVE_CAFFEE_CART,
    payload: {
      caffeeRemoved,
    },
  }
}

export function updateCaffeeCart(caffeeUpdated: CaffeType) {
  return {
    type: ActionTypes.UPDATE_CAFFEE_CART,
    payload: {
      caffeeUpdated,
    },
  }
}
