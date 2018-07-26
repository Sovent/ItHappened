import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
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
        inactiveTintColor: NavigationStyles.InactiveTintColor
    }
});
