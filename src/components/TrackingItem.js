import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import moment from 'moment';
import { TrackingListItemStyle } from '../styles/TrackingListStyles';
import { CREATE_EVENT } from '../Screens';

class TrackingItem extends Component {
    onItemPressed() {
        this.props.navigation.navigate(CREATE_EVENT);
    }

    renderHumanReadableDate(item) {
        return `Last updated: ${moment().from(item.lastUpdatedAt)}`;
    }

    render() {
        const item = this.props.children;
        return (
            <TouchableHighlight onPress={this.onItemPressed.bind(this)}>
                <View style={TrackingListItemStyle.container}>
                    <View
                        style={TrackingListItemStyle.color}
                        backgroundColor={item.color}
                    />
                    <View style={TrackingListItemStyle.content}>
                        <Text style={TrackingListItemStyle.trackingNameLabel}>
                            {item.name}
                        </Text>
                        <View style={TrackingListItemStyle.metadata}>
                            <Text style={TrackingListItemStyle.eventsCountLabel}>
                                Events count: 5
                            </Text>
                            <Text style={TrackingListItemStyle.updatedLabel}>
                                {this.renderHumanReadableDate(item)}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default TrackingItem;
