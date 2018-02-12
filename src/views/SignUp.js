import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import ScreenView from '../components/ScreenView/ScreenView';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TextDivider from '../components/TextDivider/TextDivider';

class SignUp extends Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleInput = (event, name) => {

    const { value } = event.target;
    const modifier = {};

    modifier[name] = value;

    this.setState(modifier);

  }

  handleSignUp = (event) => {
    
    event.preventDefault();
    
    const endpoint = 'http://localhost:5000/api/users/signup';

    const { email, password, confirmPassword } = this.state;

    if (email.trim() === '') return;
    if (password.trim() === '') return;

    if (password === confirmPassword) {

      axios
        .post(endpoint, {
          email,
          password,
        })
        .then(response => {

          const { success } = response.data;
          
          if (success)
          this.props.history.push('/signin');

        })
        .catch(error => console.log(error));
    
    } else {

      alert('Passwords didn\'t match');

    }

  }

  render() {

    return (
      <ScreenView>

        <form
          className="Form wrapper"
          style={{ maxWidth: 480, padding: 20 }}
          onSubmit={ this.handleSignUp } >

          <div className="Title">
            Create Account
          </div>

          <Input
            type="email"
            placeholder="Email Address"
            value={ this.state.email }
            onChange={ (e) => this.handleInput(e, 'email') } 
            reverseOrder={ true }
            fieldType="email"
            autocomplete="email"
            styles={{ 
              button: {
                opacity: 0.25 
              } 
            }} />

          <Input
            type="password"
            placeholder="Password"
            value={ this.state.password }
            onChange={ (e) => this.handleInput(e, 'password') } 
            reverseOrder={ true }
            fieldType="password"
            autocomplete="new-password"
            styles={{ 
              wrapper: {
                marginTop: 10 
              }, 
              button: { 
                opacity: 0.25 
              } 
            }} />

          <Input
            type="password"
            placeholder="Re-enter Password"
            value={ this.state.confirmPassword }
            onChange={ (e) => this.handleInput(e, 'confirmPassword') } 
            reverseOrder={ true }
            fieldType="password"
            autocomplete="new-password"
            styles={{ 
              button: { 
                opacity: 0.25 
              }
            }} />

          <Button
            innerText="Sign Up"
            styles={{
              button: {
                marginTop: 10 
              } 
            }}
            onClick={ this.handleSignUp } />

          <TextDivider 
            innerText="Already have an account ?" />

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

        </form>

      </ScreenView>
    );

  }

}

export default SignUp;
