import { SIGN_IN, SIGN_UP, AUTH_ADULT,  } from '../constants/apiUrl';
import { GET, POST } from '../constants/apiMethod';
import { Platform } from 'expo-core';

const publicAPI = (method, url, body) => {
  if (method === GET) {
    return fetch(url, { method: method }).then((response) => response.json())
  }
  else {
    return fetch(url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((response) => response.json())
  }
}

const privateAPI = (token, method, url, body) => {
  if (method === GET) {
    return fetch(url, { 
      method: method,
      headers: {
        'Content-type': 'multipart/form-data',
        'Authorization': token
      } 
    }).then((response) => response.json())
  }
  else {
    return fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      },
      body: body
    }).then((response) => response.json())
  }
}

export const sendImage = (token, idCard, faceImage) => {
  const data = new FormData();

  data.append("user_auths[id_card]", {
      name: 'id_card.jpg',
      type: 'image/jpg',
      uri: Platform.OS === "android" ? idCard.uri : idCard.uri.replace("file://", "")
    }
  );

  data.append("user_auths[face_image]", {
      name: 'face_image.jpg',
      type: 'image/jpg',
      uri : Platform.OS === "android" ? faceImage.uri : faceImage.uri.replace("file://", "")
    }
  );
  // data.append("user_auths[id_card]", {
  //   name: idCard.fileName,
  //   type: idCard.type,
  //   uri:
  //     Platform.OS === "android" ? idCard.uri : idCard.uri.replace("file://", "")
  // });

  // data.append("user_auths[face_image]", {
  //   name: faceImage.fileName,
  //   type: faceImage.type,
  //   uri:
  //     Platform.OS === "android" ? faceImage.uri : faceImage.uri.replace("file://", "")
  // });

  return privateAPI(token, POST, AUTH_ADULT, data);
};


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