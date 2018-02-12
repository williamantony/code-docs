import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import SignOut from './views/SignOut';
import SearchDocuments from './views/SearchDocuments';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/signup" component={ SignUp } />
      <Route exact path="/signin" component={ SignIn } />
      <Route exact path="/signout" component={ SignOut } />
      <Route exact path="/" component={ SearchDocuments } />
    </div>
  </Router>, 
  document.getElementById('root')
);
