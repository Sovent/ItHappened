import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    TRACKING_LIST,
    CREATE_EVENT,
    CREATE_TRACKING,
    ADD_CUSTOMIZATION,
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
import AddCustomization from './components/AddCustomization';
import EditEventScreen from './components/EditEvent';
import EventHistoryScreen from './components/EventHistory';
import EventScreen from './components/Event';
import EditTrackingScreen from './components/EditTracking';
import StatisticsScreen from './components/Statistics';
import Profile from './components/Profile';
import * as NavigationStyles from './styles/NavigationStyles';

const eventHistoryScreens = {
    [EVENT_HISTORY]: { screen: EventHistoryScreen },
    [EVENT]: { screen: EventScreen },
    [EDIT_EVENT]: { screen: EditEventScreen },
};

const createStyledStackNavigator = (routeConfig) => {
    return createStackNavigator(routeConfig, {
        navigationOptions: {
            headerStyle: NavigationStyles.NavigationBarStyle,
            headerTintColor: NavigationStyles.ActiveTintColor
        }
    });
};

const trackingStack = createStyledStackNavigator(
    {
        [TRACKING_LIST]: { screen: TrackingListScreen },
        [CREATE_TRACKING]: { screen: CreateTracking },
        [ADD_CUSTOMIZATION]: { screen: AddCustomization },
        ...eventHistoryScreens,
        [CREATE_EVENT]: { screen: CreateEventScreen },
        [EDIT_TRACKING]: { screen: EditTrackingScreen }
    });

const eventHistoryStack = createStyledStackNavigator(eventHistoryScreens);

const statisticsStack = createStyledStackNavigator({
    [STATISTICS]: { screen: StatisticsScreen },
    ...eventHistoryScreens
});

const profileStack = createStyledStackNavigator({
    [PROFILE]: { screen: Profile }
});

const icons = {
    Trackings: 'calendar-check',
    EventHistory: 'history',
    Statistics: 'trending-up',
    Profile: 'account'
};

export default createBottomTabNavigator({
    Trackings: { screen: trackingStack },
    EventHistory: { screen: eventHistoryStack },
    Statistics: { screen: statisticsStack },
    Profile: { screen: profileStack }
},
{
    tabBarOptions: {
        style: NavigationStyles.TabbarStyle,
        activeTintColor: NavigationStyles.ActiveTintColor,
        inactiveTintColor: NavigationStyles.InactiveTintColor,
        activeBackgroundColor: NavigationStyles.ActiveTabBackgroundColor
    },
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = icons[navigation.state.routeName];
            const size = focused ? 27 : 25;
            return <Icon name={iconName} size={size} color={tintColor} />;        
        }
    })
});
