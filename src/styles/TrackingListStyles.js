import * as CommonStyles from './CommonStyles';

export const TrackingListStyle = {
    ...CommonStyles.containerStyle
};

export const ItemSeparatorStyle = {
    height: 17
};

export const TrackingListItemStyle = {
    container: {
        ...CommonStyles.tileStyle,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    color: {
        width: 20,
        backgroundColor: 'red'
    },
    content: {        
        ...CommonStyles.containerStyle,
    },
    trackingNameLabel: {
        fontSize: CommonStyles.TextSizes.Large
    },
    updatedLabel: {
        fontSize: CommonStyles.TextSizes.Small
    }
};
