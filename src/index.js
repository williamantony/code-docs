import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './redux/reducers/users.reducer';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import SignOut from './views/SignOut';
import SearchDocuments from './views/SearchDocuments';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) } >
    <Router>
      <div>
        <Route exact path="/signup" component={ SignUp } />
        <Route exact path="/signin" component={ SignIn } />
        <Route exact path="/signout" component={ SignOut } />
        <Route exact path="/" component={ SearchDocuments } />
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
