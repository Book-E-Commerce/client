const defaultState = {
  isLogin: false,
  user: null
}

export default function(state=defaultState, action) {
  switch(action.type) {
    case 'CHANGE_ISLOGIN':
      return {
        ...state, 
        isLogin: action.payload
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        user: null
      }
    default: 
    return state
  }
}