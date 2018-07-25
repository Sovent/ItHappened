import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import TrackingItem from './TrackingItem';
import { CREATE_TRACKING } from '../Screens';
import { fetchTrackings } from '../actions';
import { TrackingListStyle, ItemSeparatorStyle } from '../styles/TrackingListStyles';

class TrackingList extends Component {
  componentWillMount() {
    this.props.fetchTrackings({ uid: 'uid' });
  }

  onButtonPress() {
    this.props.navigation.navigate(CREATE_TRACKING);
  }

  renderItem({ item }) {
    return (
      <TrackingItem navigation={this.props.navigation}>{item}</TrackingItem>
    );
  }

  renderFooter() {
    return (
      <RkButton onPress={this.onButtonPress.bind(this)}>
        Add tracking
      </RkButton>
    );
  }

  renderSeparator() {
    return <View style={ItemSeparatorStyle} />;
  }

  render() {
    return (
      <FlatList
          style={TrackingListStyle}
          data={this.props.trackings}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
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
