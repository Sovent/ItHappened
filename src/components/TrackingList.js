import React, { Component } from 'react';
import { View, FlatList, Button } from 'react-native';
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
      <Button title="Add" onPress={this.onButtonPress.bind(this)} />
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
  return {
    trackings: [
      {
        id: '1',
        name: 'Vypil chayu',
        lastUpdatedAt: new Date()
      },
      {
        id: '2',
        name: 'Umer',
        lastUpdatedAt: new Date()
      },
      {
        id: '3',
        name: 'Vyzhil',
        lastUpdatedAt: new Date()
      },
      {
        id: '4',
        name: 'Poznal bol',
        lastUpdatedAt: new Date()
      },
      {
        id: '11',
        name: 'Vypil chayu',
        lastUpdatedAt: new Date()
      },
      {
        id: '12',
        name: 'Umer',
        lastUpdatedAt: new Date()
      },
      {
        id: '13',
        name: 'Vyzhil',
        lastUpdatedAt: new Date()
      },
      {
        id: '14',
        name: 'Poznal bol',
        lastUpdatedAt: new Date()
      }
    ]
  };

  //return { trackings: state.trackings.list };
};

export default connect(mapStateToProps, { fetchTrackings })(TrackingList);
