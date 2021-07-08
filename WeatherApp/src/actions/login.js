import {LOGIN_AUTH_TOKEN} from '../constants';

export function loginAuthData(data) {
  let {accessToken} = data.payload.data;
  console.log('Login action :: accessToken ', accessToken);
  return {
    type: LOGIN_AUTH_TOKEN,
    payload: accessToken,
  };
}
