import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../redux/actions';

import ScreenView from '../components/ScreenView/ScreenView';
import Actions from '../components/Actions/Actions';
import List from '../components/List/List';
import TextDivider from '../components/TextDivider/TextDivider';

class SearchDocuments extends Component {
  
  state = {
    visible: false,
  }
  
  componentWillMount() {

    this.props.checkAuth(this, true);

  }

  render() {

    return (
      <ScreenView visible={ this.state.visible } >

        <Actions history={ this.props.history } />

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
  checkAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDocuments);
