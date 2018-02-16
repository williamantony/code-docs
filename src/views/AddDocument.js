import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../redux/actions';

import axios from 'axios';

import ScreenView from '../components/ScreenView/ScreenView';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

class AddDocument extends Component {

  state = {
    title: '',
    url: '',
    visible: false,
  }

  handleInput = (event, name) => {
    
    const { value } = event.target;
    const modifier = {};

    modifier[name] = value;

    this.setState(modifier);

  }
  
  saveDocument = () => {
    
    const { title, url } = this.state;

    const endpoint = 'http://localhost:5000/api/documentations';

    const data = {
      title,
      url,
    };

    const token = window.localStorage.getItem('token');

    const config = {
      headers: {
        authorization: token,
      },
    };
    
    const promise = axios.post(endpoint, data, config);

    
    
  }

  componentDidMount() {
    
    this.props.checkAuth(this, true);

  }

  render() {

    return (
      <ScreenView visible={ this.state.visible }>

        <form 
          className="Form wrapper"
          onSubmit={ (e) => e.preventDefault() } >

          <div className="Title">Add new documentation</div>

          <Input 
            styles={{
              wrapper: {
                marginHorizontal: 10
              },
              button: {
                opacity: 0.25 
              }
            }}
            reverseOrder={ true }
            requireButton={ false }
            fieldType="text"
            placeholder="Enter a title"
            onChange={ (e) => this.handleInput(e, 'title') }
            />

          <Input 
            styles={{
              wrapper: {
                marginHorizontal: 10
              },
              button: {
                opacity: 0.25 
              }
            }}
            reverseOrder={ true }
            requireButton={ false }
            fieldType="hyperlink"
            placeholder="Enter documentation URL here"
            onChange={ (e) => this.handleInput(e, 'url') }
            />

          <Button
            styles={{
              button: {
                marginTop: 10
              }
            }}
            innerText="Save Documentation"
            onClick={ this.saveDocument }
            />

        </form>

      </ScreenView>
    )

  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  checkAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDocument);
