import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  authorizeUser
} from '../redux/actions';

import axios from 'axios';

import ScreenView from '../components/ScreenView/ScreenView';
import Filter from '../components/Filter/Filter';
import List from '../components/List/List';
import TextDivider from '../components/TextDivider/TextDivider';
import { runInThisContext } from 'vm';

class SearchDocuments extends Component {
  

  state = {
    visible: this.props.authorized || false,
  }
  
  componentWillMount() {

    this.props.authorizeUser()
      .then(response => {
        
        const { authorized } = response.payload.data;

        if (!authorized) {

          this.props.history.push('/signin');
  
        } else {
  
          this.setState({
            visible: true,
          });
  
        }

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

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  authorizeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDocuments);
