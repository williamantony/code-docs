import { combineReducers } from 'redux';

import users from './users.reducer';

const reducers = {
  users,
};

export default combineReducers(reducers);
