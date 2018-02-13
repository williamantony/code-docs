import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authorizeUser } from '../redux/actions';

import ScreenView from '../components/ScreenView/ScreenView';
import Button from '../components/Button/Button';
import TextDivider from '../components/TextDivider/TextDivider';

class SignIn extends Component {

  state = {
    email: '',
    password: '',
  }

  componentWillMount() {

    window.localStorage.removeItem('token');

    this.props.authorizeUser();

  }

  render() {

    return (
      <ScreenView>

        <div 
          className="Form wrapper" 
          style={{ maxWidth: 480 }} >

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

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  authorizeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
