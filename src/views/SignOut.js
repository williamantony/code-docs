import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import ScreenView from '../components/ScreenView/ScreenView';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TextDivider from '../components/TextDivider/TextDivider';

class SignIn extends Component {

  state = {
    email: '',
    password: '',
  }

  componentWillMount() {

    window.localStorage.removeItem('token');

  }

  render() {

    return (
      <ScreenView>

        <div 
          className="Form wrapper" 
          style={{ maxWidth: 480, padding: 20 }} >

          <div className="Title">
            You are logged out
          </div>

          <TextDivider 
            innerText="Do you want to sign back in ?"
            styles={{
              divider: {
                marginTop: 100
              }
            }} />

          <Link
            to="/signin">

            <Button
              innerText="Sign In"
              styles={{
                button: {
                  display: 'block',
                  minWidth: 150, 
                  marginLeft: 'auto', 
                  marginRight: 'auto', 
                  backgroundColor: '#777' 
                }
              }} />

          </Link>

        </div>

      </ScreenView>
    );

  }

}

export default SignIn;
