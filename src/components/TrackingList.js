import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { CREATE_EVENT } from '../Screens';
import { fetchTrackings } from '../actions';

class TrackingList extends Component {
  componentWillMount() {
    this.props.fetchTrackings({ uid: 'uid' });
  }

  render() {
    console.log(this.props.trackings);

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

const mapStateToProps = state => {
  return { trackings: state.trackings };
};

export default connect(mapStateToProps, { fetchTrackings })(TrackingList);
