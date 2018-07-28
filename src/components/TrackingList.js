import React, { Component } from 'react';
import { View, FlatList, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import TrackingItem from './TrackingItem';
import { CREATE_TRACKING } from '../Screens';
import { fetchTrackings } from '../actions';
import * as Styles from '../styles/TrackingListStyles';

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

  renderSeparator() {
    return <View style={Styles.ItemSeparatorStyle} />;
  }

  renderEmptyComponent() {
    return (
      <View style={Styles.EmptyListStyle.container}>
        <Text style={Styles.EmptyListStyle.text}>
          Something happened that you don't want to forget?
        </Text>
        <Text style={Styles.EmptyListStyle.text}>
          Add new event tracking and every time it occurs, it will remain in history
        </Text>
        <TouchableHighlight onPress={this.onButtonPress.bind(this)}>
          <View style={Styles.EmptyListStyle.buttonContainer}>
            <Text style={Styles.EmptyListStyle.buttonText}>START TRACKING EVENTS</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  renderAddButton() {
    if (this.props.trackings.length !== 0) {
      return (
        <ActionButton
          buttonColor={Styles.ActionButtonStyle.buttonColor}
          onPress={this.onButtonPress.bind(this)}
        />);
    }
  }

  render() {
    return (
      <View flex={1}>
        <FlatList
          style={Styles.TrackingListStyle}
          data={this.props.trackings}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListEmptyComponent={this.renderEmptyComponent()}
          ListFooterComponent={this.renderSeparator}
        />
        {this.renderAddButton.bind(this)()}
      </View>      
    );
  }
}

TrackingList.navigationOptions = {
  title: 'What happened?'
};

const mapStateToProps = state => {  
  // return {
  //   trackings: [
  //     {
  //       id: '1',
  //       name: 'Vypil chayu',
  //       color: '#CCAABB',
  //       lastUpdatedAt: new Date()
  //     },
  //     {
  //       id: '2',
  //       name: 'Umer',
  //       color: '#CCAABB',
  //       lastUpdatedAt: new Date()
  //     },
  //     {
  //       id: '3',
  //       name: 'Vyzhil',
  //       color: '#CCAABB',
  //       lastUpdatedAt: new Date()
  //     },
  //     {
  //       id: '4',
  //       name: 'Poznal bol',
  //       color: '#CCAABB',
  //       lastUpdatedAt: new Date()
  //     },
  //     {
  //       id: '11',
  //       name: 'Vypil chayu',
  //       lastUpdatedAt: new Date()
  //     },
  //     {
  //       id: '12',
  //       name: 'Umer',
  //       lastUpdatedAt: new Date()
  //     },
  //     {
  //       id: '13',
  //       name: 'Vyzhil',
  //       lastUpdatedAt: new Date()
  //     },
  //     {
  //       id: '14',
  //       name: 'Poznal bol',
  //       lastUpdatedAt: new Date()
  //     }
  //   ]
  // };

  return { trackings: state.trackings.list };
};

export default connect(mapStateToProps, { fetchTrackings })(TrackingList);
