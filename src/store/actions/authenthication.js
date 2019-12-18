export function login() {
  return {type: 'CHANGE_ISLOGIN', payload: true};
};

export function logout() {
  return {type: 'LOGOUT'};
};

export function setUser(user) {
  return {type: 'SET_USER', payload: user};
}