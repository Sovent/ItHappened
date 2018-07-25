import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { TrackingListItemStyle } from '../styles/TrackingListStyles';
import { CREATE_EVENT } from '../Screens';

class TrackingItem extends Component {
    onItemPressed() {
        this.props.navigation.navigate(CREATE_EVENT);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.onItemPressed.bind(this)}>
                <View style={TrackingListItemStyle.container}>
                    <View style={TrackingListItemStyle.color} />
                    <View style={TrackingListItemStyle.content}>
                        <RkText style={TrackingListItemStyle.trackingNameLabel}>
                            {this.props.children.name}
                        </RkText>
                        <RkText style={TrackingListItemStyle.updatedLabel}>
                            {this.props.children.lastUpdatedAt.toISOString()}
                        </RkText>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default TrackingItem;
