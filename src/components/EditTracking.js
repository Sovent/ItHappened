import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { editTracking } from '../actions';

class EditTracking extends Component {
  render() {
    return (
      <View>
        <Text> Edit tracking </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.editTrackingForm);
  return {};
};

export default connect(mapStateToProps, { editTracking })(EditTracking);
