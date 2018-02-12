import React, { Component } from 'react';

import './Button.css';

class Button extends Component {

  render() {

    const { 
      innerText,
      onClick,
    } = this.props;

    const styles = this.props.styles || {};
    const buttonStyle = styles.button || {};
    const textStyle = styles.text || {};

    return (
      <button
        className="Button"
        style={ buttonStyle }
        onClick={ onClick } >

        <div 
          className="text"
          style={ textStyle } >
          { innerText }
        </div>

      </button>
    );

  }

}

export default Button;
