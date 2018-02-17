import axios from 'axios';

export const CREATE_DOCUMENTATION = 'CREATE_DOCUMENTATION';

export const saveDocument = (title, url) => {
  
  const endpoint = 'http://localhost:5000/api/documentations';

  const data = {
    title,
    url,
  };

  const token = window.localStorage.getItem('token');

  const config = {
    headers: {
      authorization: token,
    },
  };
  
  const promise = axios.post(endpoint, data, config);

  return (dispatch) => {

    promise.then(response => {
      
      dispatch({
        type: CREATE_DOCUMENTATION,
        payload: response.data,
      });

    });

  };

};
