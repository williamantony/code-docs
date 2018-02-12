import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.css';
import Button from '../Button/Button';

class Header extends Component {

  handleSignOut = () => {

    this.props.history.push('/signout');

  }

  render() {

    return (
      <header className="Header">
        <div className="Header__content">

          <div className="Header__title">
            Code<span className="Header__title--highlight">Docs</span>
          </div>
          
          {
            (this.props.authorized) ?
            <Button
              innerText="Sign Out"
              styles={{
                button: {
                  fontSize: 16,
                  fontWeight: '400',
                  maxWidth: 100,
                  marginRight: 10,
                  textShadow: '0 0 0',
                  boxShadow: '0 0 0 0',
                  backgroundColor: 'transparent'
                },
                text: {
                  color: '#ffc107'
                }
              }}
              onClick={ this.handleSignOut } />
              : null
          }

        </div>
      </header>
    );

  }

}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {  })(Header);
