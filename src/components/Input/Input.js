import React, { Component } from 'react';

import './Input.css';

class Input extends Component {

  render() {

    const {
      reverseOrder,
      requireButton,
      type,
      placeholder,
      value,
      autocomplete,
      onChange,
      onButtonPress,
    } = this.props;

    const inputType = type || 'text';
    const autoComplete = autocomplete || 'off';

    const containerClassName = 'Input' + (reverseOrder ? ' Input--reversed' : '' );

    const styles = this.props.styles || {};
    const wrapperStyles = styles.wrapper || {};
    const inputStyles = styles.input || {};
    const buttonStyles = styles.button || {};

    const fieldType = this.props.fieldType || 'text';

    return (
      <div
        className={ containerClassName }
        style={ wrapperStyles }
        data-type={ fieldType } >

        <input
          className="Input__field"
          style={ inputStyles }
          type={ inputType } 
          value={ value }
          placeholder={ placeholder }
          autoComplete={ autoComplete }
          onChange={ onChange } />

        {
          (requireButton)
          ? <button 
              className="Input__button" 
              style={ buttonStyles }
              onClick={ onButtonPress } />
          : <div 
              className="Input__button"
              style={ buttonStyles }
              onClick={ (e) => e.target.parentNode.getElementsByClassName('Input__field')[0].focus() } />
        }

      </div>
    );

  }

}

export default Input;
