import {LOGIN_AUTH} from '../constants';

const initialState = {
  loginData: null,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH:
      return {
        ...state,
        loginData: action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
