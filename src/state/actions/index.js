import { ADD, REMOVE, CLEAR } from "../constants/action-types"

export const add = (quantity, item) => ({
  type: ADD,
  payload: { quantity: quantity, item: item },
})

export const remove = (quantity, item) => ({
  type: REMOVE,
  payload: { quantity: quantity, item: item },
})

export const clear = () => ({
  type: CLEAR,
})
