import {
  CREATE_DOCUMENTATION
} from '../actions';

const initialState = {
  response: ''
};

export default (state = initialState, action) => {
  switch(action.type) {

    case CREATE_DOCUMENTATION:
    console.log(action.payload);
      return action.payload;
      
    default:
      return state;

  }
};
