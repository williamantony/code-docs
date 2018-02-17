import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScreenView from '../components/ScreenView/ScreenView';
import TextDivider from '../components/TextDivider/TextDivider';

class SignOut extends Component {

  state = {
    email: '',
    password: '',
  }

  componentWillMount() {

    if (window.localStorage.getItem('token')) {

      window.localStorage.removeItem('token');
      
      setTimeout(() => {
        this.props.history.push('/signin');
      }, 1000);
    
    } else {

      this.props.history.push('/signin');
      
    }

  }

  render() {

    return (
      <ScreenView>

        <div 
          className="wrapper" 
          style={{ maxWidth: 480 }} >

          <TextDivider 
            innerText="Signing Out ..."
            styles={{
              divider: {
                marginTop: 100
              }
            }} />

        </div>

      </ScreenView>
    );

  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
