import React, { Component } from 'react';
import { View, TouchableNativeFeedback, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    Menu, MenuOptions, MenuOption, renderers, MenuTrigger
} from 'react-native-popup-menu';
import { Divider } from 'react-native-elements';
import { TrackingListItemStyle } from '../styles/TrackingListStyles';
import { menu as MenuStyle } from '../styles/CommonStyles';
import { CREATE_EVENT, EDIT_TRACKING } from '../Screens';
import { deleteTracking, editTracking } from '../actions';

class TrackingItem extends Component {
    onItemPressed() {
        this.props.navigation.navigate(CREATE_EVENT);
    }
    
    onItemLongPressed() {
        this.menu.open();
    }

    onDeletePressed() {
        this.props.deleteTracking(this.props.children.id);
    }

    onEditPressed() {
        this.props.editTracking(this.props.children);
        this.props.navigation.navigate(EDIT_TRACKING);
        console.log('edit pressed');
    }

    renderHumanReadableDate(item) {
        return `Last updated: ${moment().from(item.lastUpdatedAt)}`;
    }

    render() {
        const item = this.props.children;
        return (
            <TouchableNativeFeedback
                onPress={this.onItemPressed.bind(this)}
                onLongPress={this.onItemLongPressed.bind(this)}
            >
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
                    <Menu renderer={renderers.SlideInMenu} ref={menu => { this.menu = menu; }}>
                        <MenuTrigger />
                        <MenuOptions>
                            <MenuOption
                                customStyles={MenuStyle.menuOption}
                                text='Edit'
                                onSelect={this.onEditPressed.bind(this)}
                            />
                            <MenuOption
                                customStyles={MenuStyle.menuOption}
                                text='Delete'
                                onSelect={this.onDeletePressed.bind(this)}
                            />
                            <Divider />
                            <MenuOption
                                customStyles={MenuStyle.menuOption}
                                text='Cancel'
                            />
                        </MenuOptions>
                    </Menu>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export default connect(null, { deleteTracking, editTracking })(TrackingItem);
