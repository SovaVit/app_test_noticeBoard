
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export function login(data) {
  return {
      type: LOGIN_SUCCESS,
      payload: {
        name: data.name,
        token: data.token,
        isLogged: true,
      }
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  };
}
