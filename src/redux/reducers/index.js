import { combineReducers } from 'redux';

import users from './users.reducer';
import documentations from './documentations.reducer';


const reducers = {
  documentations,
  users,
};


export default combineReducers(reducers);
