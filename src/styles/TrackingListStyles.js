import * as CommonStyles from './CommonStyles';

export const TrackingListStyle = {
    ...CommonStyles.containerStyle,
    backgroundColor: CommonStyles.Colors.screenBackgroundColor
};

export const ItemSeparatorStyle = {
    height: 10
};

export const TrackingListItemStyle = {
    container: {
        ...CommonStyles.tileStyle,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderLeftColor: 'red',
    },
    color: {
        width: 10,
        backgroundColor: 'gray'
    },
    content: {        
        ...CommonStyles.containerStyle,
        flex: 1
    },
    metadata: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    trackingNameLabel: {
        fontSize: CommonStyles.TextSizes.Large,
        color: CommonStyles.Colors.primaryTextColor,
        lineHeight: CommonStyles.TextSizes.Large * 2
    },
    eventsCountLabel: {
        fontSize: CommonStyles.TextSizes.Tiny,
        color: CommonStyles.Colors.secondaryTextColor,
        lineHeight: CommonStyles.TextSizes.Tiny * 2
    },
    updatedLabel: {
        fontSize: CommonStyles.TextSizes.Tiny,
        color: CommonStyles.Colors.secondaryTextColor,
        lineHeight: CommonStyles.TextSizes.Tiny * 2
    }
};
