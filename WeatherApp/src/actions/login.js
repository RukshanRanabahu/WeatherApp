import {LOGIN_AUTH} from '../constants';

export function loginAuthData(data) {
  console.log('Login action :: loginAuthData ', data);
  return {
    type: LOGIN_AUTH,
    payload: data,
  };
}
