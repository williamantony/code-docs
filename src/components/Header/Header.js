import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../../redux/actions';

import './Header.css';

class Header extends Component {

  handleSignOut = () => {

    this.props.history.push('/signout');

  }

  componentWillMount() {
    
    // this.props.checkAuth(this, false);

  }

  render() {

    const headerClass = 'Header__content' + ((this.props.authorized) ? ' Header__content--authorized' : '');


    return (
      <header className="Header">
        <div className={ headerClass }>

          <button 
            className="Header__button Header__button--back"
            onClick={ this.props.history.goBack } />

          <div className="Header__title">
            Developer<span className="Header__title--highlight">Docs</span>
          </div>
          
            <button
              style={{
                visibility: (this.props.authorized) ? 'visible' : 'hidden'
              }}
              className="Header__button Header__button--signout"
              onClick={ this.handleSignOut } />

        </div>
      </header>
    );

  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  checkAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
