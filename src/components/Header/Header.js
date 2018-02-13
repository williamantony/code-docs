import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.css';
import Button from '../Button/Button';

class Header extends Component {

  handleSignOut = () => {

    this.props.history.push('/signout');

  }

  render() {

    const headerClass = 'Header__content'
                      + ((this.props.authorized) ? ' Header__content--authorized' : '');

    return (
      <header className="Header">
        <div className={ headerClass }>

          <button 
            className="Header__button Header__button--back"
            onClick={ this.props.history.goBack } />

          <div className="Header__title">
            Developer<span className="Header__title--highlight">Docs</span>
          </div>
          
          {
            (this.props.authorized) ?
            <button
              className="Header__button Header__button--signout"
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
