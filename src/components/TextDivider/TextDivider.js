import React, { Component } from 'react'

import './TextDivider.css';

class TextDivider extends Component {

  render() {

    const { innerText } = this.props;

    const styles = this.props.styles || {};
    const dividerStyle = styles.divider || {};
    const textStyle = styles.text || {};

    return (
      <div 
        className="Divider"
        style={ dividerStyle } >

        <span 
          className="text"
          style={ textStyle } >
          { innerText }
        </span>
        
      </div>
    )

  }

}

export default TextDivider;
