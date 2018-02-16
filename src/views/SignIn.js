import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from '../redux/actions';

import axios from 'axios';

import ScreenView from '../components/ScreenView/ScreenView';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TextDivider from '../components/TextDivider/TextDivider';

class SignIn extends Component {

  state = {
    email: '',
    password: '',
    visible: false,
  }

  handleInput = (event, name) => {
    
    const { value } = event.target;
    const modifier = {};

    modifier[name] = value;

    this.setState(modifier);

  }

  handleSignIn = (event) => {
    
    event.preventDefault();
    
    const endpoint = 'http://localhost:5000/api/users/signin';
    
    const { email, password } = this.state;

    if (email.trim() === '') return;
    if (password.trim() === '') return;

    axios
      .post(endpoint, {
        email,
        password,
      })
      .then(response => {
        
        const { token } = response.data;
        
        window.localStorage.setItem('token', token);

        this.props.history.push('/');

      })
      .catch(error => console.log(error));

  }

  componentWillMount() {

    this.props.checkAuth(this, false);

  }

  render() {
    
    return (
      <ScreenView visible={ this.state.visible }>

        <form 
          className="Form wrapper" 
          style={{ maxWidth: 480 }}
          onSubmit={ this.handleSignIn } >

          <div className="Title">
            Log In
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
            autocomplete="current-password"
            styles={{
              button: { 
                opacity: 0.25 
              } 
            }} />

          <Button
            innerText="Sign In"
            styles={{ 
              button: { 
                marginTop: 10 
              } 
            }}
            onClick={ this.handleSignIn } />

          <TextDivider 
            innerText="Don't have an account, yet ?" />

          <Link
            to="/signup">

            <Button
              innerText="Create Account"
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

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  checkAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
