import {
  AUTHORIZE_USER
} from '../actions';

const initialState = {
  authorized: false
};

const users = (state = initialState, action) => {
  switch(action.type) {

    case AUTHORIZE_USER:
      return action.payload.data;
      
    default:
      return state;

  }
};

export default users;
