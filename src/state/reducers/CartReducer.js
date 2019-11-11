import { ADD, REMOVE, CLEAR } from "../constants/action-types"

// Set initial state
const initialState = {
  count: 0,
  total: 0,
  shipping: 0,
  grandTotal: 0,
  items: [],
}

// Items
const sum = (accumulator, value) => accumulator + value
const countFunc = (items = []) =>
  items.map(item => item.quantity).reduce(sum, 0)
const totalFunc = (items = []) => items.map(item => item.total).reduce(sum, 0)
const shippingFunc = count => (count < 12 ? 5.5 : 0)

const cart = (state = initialState, action) => {
  //console.log(action)
  action.payload = action.payload || {}
  const { quantity, item } = action.payload
  let newState, newItem, filteredItems
  let count, items, shipping, total, grandTotal
  switch (action.type) {
    case ADD:
      items = state.items.filter(i => i.id == item.id)
      newItem = items[0] || item
      newItem.quantity = newItem.quantity || 0
      newItem.quantity += quantity
      newItem.total = item.price * newItem.quantity
      filteredItems = state.items.filter(i => i.id != item.id)
      items = [newItem, ...filteredItems]
      count = countFunc(items)
      shipping = shippingFunc(count)
      total = totalFunc(items)
      grandTotal = total + shipping
      newState = { count, items, shipping, total, grandTotal }
      return newState

    case REMOVE:
      item.quantity -= quantity
      item.total = item.price * item.quantity
      let pos = state.items.indexOf(item)
      //items = state.items.filter((i) => i.id != item.id)
      items = state.items
      item.quantity <= 0 ? items.splice(pos, 1) : items.splice(pos, 1, item)
      count = countFunc(items)
      shipping = shippingFunc(count)
      total = totalFunc(items)
      grandTotal = total + shipping
      newState = { count, items, shipping, total, grandTotal }
      return newState

    case CLEAR:
      return initialState
  }
  return state
}

export default cart
