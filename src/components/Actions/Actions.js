import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Actions.css';
import Input from '../Input/Input';

class Actions extends Component {

  state = {
    input: ''
  }
  
  handleInput = (event) => {

    this.setState({
      input: event.target.value
    });

  }

  goToAddDocument = () => {

    this.props.history.push('/documentations/new');

  };

  render() {

    return (
      <div className="Actions wrapper">
      
        <Input
          styles={{ 
            wrapper: { 
              width: 'calc(100% - 100px)',
              margin: 10
            } 
          }}
          value={ this.state.input }
          placeholder="Search Documentations"
          requireButton={ true }
          onChange={ this.handleInput } 
          />

        <button
          className="Actions__addDocumentation"
          onClick={ this.goToAddDocument } />

      </div>
    );

  }

}


const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {  })(Actions);