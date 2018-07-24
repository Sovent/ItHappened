import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { RkText, RkButton } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { CREATE_TRACKING } from '../Screens';
import { fetchTrackings } from '../actions';

class TrackingList extends Component {
  componentWillMount() {
    this.props.fetchTrackings({ uid: 'uid' });
  }

  onButtonPress() {
    this.props.navigation.navigate(CREATE_TRACKING);
  }

  renderItem({ item }) {
    return (
      <View>
        <RkText rkType='primary'>{item.name}</RkText>
        <RkText>{item.lastUpdatedAt.toISOString()}</RkText>
      </View>
    );
  }

  renderFooter() {
    return (
      <RkButton onPress={this.onButtonPress.bind(this)}>
        Add tracking
      </RkButton>
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.trackings}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={item => item.id}
        ListFooterComponent={this.renderFooter.bind(this)}
      />
    );
  }
}

TrackingList.navigationOptions = {
  title: 'Trackings'
};

const mapStateToProps = state => {
  return { trackings: state.trackings.list };
};

export default connect(mapStateToProps, { fetchTrackings })(TrackingList);
