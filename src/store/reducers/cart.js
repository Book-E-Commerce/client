const defaultState = {
  cart : []
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_CART_DATA':
      return {
        ...state,
        cart: action.payload
      }
    default: return state
  }
}