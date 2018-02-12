import React, { Component } from 'react';

import './ScreenView.css';

class ScreenView extends Component {
  
  render() {

    const visible = (typeof this.props.visible !== 'boolean') ? true : this.props.visible;

    let className = 'ScreenView'
    className += (!visible) ? ' ScreenView--hidden' : '';

    return (
      <div className={ className } >
        { this.props.children }
      </div>
    )

  }

}

export default ScreenView;
