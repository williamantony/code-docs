import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorizeUser } from '../redux/actions';

import ScreenView from '../components/ScreenView/ScreenView';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

class AddDocument extends Component {

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
      <ScreenView visible={ this.state.visible }>

        <div className="Form wrapper">

          <Input 
            styles={{
              wrapper: {
                margin: 10
              },
              button: {
                opacity: 0.25 
              }
            }}
            reverseOrder={ true }
            requireButton={ false }
            fieldType="hyperlink"
            placeholder="Enter documentation URL here"
            />

        </div>

      </ScreenView>
    )

  }

}

const mapStateToProps = state => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps, { authorizeUser })(AddDocument);
