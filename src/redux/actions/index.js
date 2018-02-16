import axios from 'axios';

export const AUTHORIZE_USER = 'AUTHORIZE_USER';



export const checkAuth = (context, reqAuth = true) => {

  const endpoint = 'http://localhost:5000/api/users/authorize';

  const token = window.localStorage.getItem('token');

  const config = {
    headers: {
      authorization: token,
    },
  };

  const promise = axios.post(endpoint, {}, config);

  return (dispatch) => {

    promise.then(response => {

      validateAuthentication(response, context, reqAuth);
      
      dispatch({
        type: AUTHORIZE_USER,
        payload: response.data,
      });

    });
    
  };

};

export const validateAuthentication = (response, context, reqAuth = true) => {
  
  const { authorized } = response.data;

  if (reqAuth) {

    if (!authorized){
      context.props.history.push('/signin');
    }
    else{
      context.setState({ visible: true });
    }

  } else {

    if (authorized) {
      context.props.history.push('/');
    }
    else{
      context.setState({ visible: true });
    }
  }
    
};
