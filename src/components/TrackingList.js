import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { CREATE_EVENT } from '../Screens';

class TrackingList extends Component {
  render() {
    return (
      <View>
        <Text> Tracking list </Text>
        <Button
          title='Create event'
          onPress={() => this.props.navigation.navigate(CREATE_EVENT)}
        />
      </View>
    );
  }
}

TrackingList.navigationOptions = {
  title: 'Trackings'
};

export default TrackingList;
