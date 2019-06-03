import { SIGN_IN, SIGN_UP,  } from '../constants/apiUrl';
import { GET, POST } from '../constants/apiMethod';

const publicAPI = (method, url, body) => {
  if (method === GET) {
    return fetch(url, { method: method }).then((response) => response.json())
  }
  else {
    return fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }).then((response) => response.json())
  }
}

// const privateAPI = (method: string, url: string, accessKey:string, secretKey:string) => {
//   const payload = {
//     access_key: accessKey,
//     nonce: (new Date).getTime()
//   }
//   const token = jwt.encode(payload, secretKey);

//   var options = {
//     method: method,
//     headers: {Authorization: `Bearer ${token}`}
//   };

//   return fetch(url, options).then((response) => response.json())
// }

export const signIn = (email, password) => {
  return publicAPI(POST, SIGN_IN, {email: email, password: password});
};

export const signUp = (name, userName, email, password, passwordConfirmation) => {
  return publicAPI(POST, SIGN_UP, {
    name: name,
    username: userName,
    email: email, 
    password: password,
    password_confirmation: passwordConfirmation});
};

// export const getERCToken = () => {
//   return publicAPI(GET, GET_UPBIT_ERC_URL)
// }

// export const getTokenTicker = (marketCode:string) => {
//   return publicAPI(GET, `${UPBIT_GET_TICKER_URL}${marketCode}`)
// }

// export const getUpbitAccount = (accessKey:string, secretKey:string) => {
//   return privateAPI(GET, UPBIT_GET_ACCOUNT_URL, accessKey, secretKey)
// }