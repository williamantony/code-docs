import React, { Component } from 'react';

import './Filter.css';
import Input from '../Input/Input';

class Filter extends Component {

  state = {
    input: ''
  }
  
  handleInput = (event) => {

    this.setState({
      input: event.target.value
    });

  }

  render() {

    return (
      <div className="Filter wrapper">
      
        <Input
          styles={{ wrapper: { margin: 10 } }}
          value={ this.state.input }
          placeholder="Search Documentation"
          requireButton={ true }
          onChange={ this.handleInput } 
          />

      </div>
    );

  }

}

export default Filter;