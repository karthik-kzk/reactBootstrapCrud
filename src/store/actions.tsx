export const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";

export const setIsLoggedIn = (value: boolean) => ({
  type: SET_IS_LOGGED_IN,
  payload: value,
});