import axios from 'axios';

export const AUTHORIZE_USER = 'AUTHORIZE_USER';



export const authorizeUser = () => {

  const endpoint = 'http://localhost:5000/api/users/authorize';

  const token = window.localStorage.getItem('token');

  const config = {
    headers: {
      authorization: token,
    },
  };
  
  const promise = axios.post(endpoint, {}, config);

  return {
    type: AUTHORIZE_USER,
    payload: promise,
  };

};
