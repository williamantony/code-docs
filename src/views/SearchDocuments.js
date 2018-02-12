import React, { Component } from 'react';
import axios from 'axios';

import ScreenView from '../components/ScreenView/ScreenView';
import Filter from '../components/Filter/Filter';
import List from '../components/List/List';
import TextDivider from '../components/TextDivider/TextDivider';

class SearchDocuments extends Component {
  
  state = {
    visible: false,
  }

  componentWillMount() {

    const endpoint = 'http://localhost:5000/api/users/authorize';

    const token = window.localStorage.getItem('token');

    axios
      .post(endpoint, {}, {
        headers: {
          authorization: token,
        },
      })
      .then(response => {

        const { authorized } = response.data;

        if (!authorized) {
          this.props.history.push('/signin');
        } else {
          this.setState({
            visible: true,
          });
        }

      })
      .catch(error => {        
        this.props.history.push('/signin');
      });

  }

  render() {

    return (
      <ScreenView visible={ this.state.visible } >

        <Filter />

        <TextDivider
          innerText="25 Documentations available" />
          
        <List />

      </ScreenView>
    );

  }

}

export default SearchDocuments;
