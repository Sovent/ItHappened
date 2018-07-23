import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {
    TRACKING_LIST,
    CREATE_EVENT,
    CREATE_TRACKING,
    EDIT_EVENT,
    EDIT_TRACKING,
    EVENT,
    EVENT_HISTORY,
    STATISTICS,
    PROFILE
} from './Screens';
import TrackingListScreen from './components/TrackingList';
import CreateEventScreen from './components/CreateEvent';
import CreateTracking from './components/CreateTracking';
import EditEventScreen from './components/EditEvent';
import EventHistoryScreen from './components/EventHistory';
import EventScreen from './components/Event';
import EditTrackingScreen from './components/EditTracking';
import StatisticsScreen from './components/Statistics';
import Profile from './components/Profile';

const eventHistoryScreens = {
    [EVENT_HISTORY]: { screen: EventHistoryScreen },
    [EVENT]: { screen: EventScreen },
    [EDIT_EVENT]: { screen: EditEventScreen },
}

const trackingStack = createStackNavigator(
    {
        [TRACKING_LIST]: { screen: TrackingListScreen },
        [CREATE_TRACKING]: { screen: CreateTracking },
        ...eventHistoryScreens,
        [CREATE_EVENT]: { screen: CreateEventScreen },
        [EDIT_TRACKING]: { screen: EditTrackingScreen }
    });

const eventHistoryStack = createStackNavigator(eventHistoryScreens);

const statisticsStack = createStackNavigator({
    [STATISTICS]: { screen: StatisticsScreen },
    ...eventHistoryScreens
});

const profileStack = createStackNavigator({
    [PROFILE]: { screen: Profile }
});

export default createBottomTabNavigator({
    Trackings: { screen: trackingStack },
    EventHistory: { screen: eventHistoryStack },
    Statistics: { screen: statisticsStack },
    Profile: { screen: profileStack }
});
