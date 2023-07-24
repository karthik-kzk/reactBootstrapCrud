import { SET_IS_LOGGED_IN } from "./actions";

const initialState = {
  isLoggedIn: false,
};

const rootReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
