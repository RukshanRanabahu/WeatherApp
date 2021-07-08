import {LOGIN_AUTH_TOKEN} from '../constants';

const initialState = {
  loginAuthToken: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH_TOKEN:
      return {
        ...state,
        loginAuthToken: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
