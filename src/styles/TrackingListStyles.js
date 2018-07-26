import * as CommonStyles from './CommonStyles';

export const TrackingListStyle = {
    ...CommonStyles.containerStyle
};

export const ItemSeparatorStyle = {
    height: 10
};

export const ActionButtonStyle = {
    buttonColor: CommonStyles.Colors.actionColor
};

export const EmptyListStyle = {
    container: {
        marginTop: '50%',
        justifyContent: 'center'
    },
    text: {
        fontSize: CommonStyles.TextSizes.Medium,
        color: CommonStyles.Colors.secondaryTextColor,
        textAlign: 'center'
    },
    buttonContainer: {
        ...CommonStyles.containerStyle,
        ...CommonStyles.tileStyle,
        borderColor: CommonStyles.Colors.actionColor,
        backgroundColor: CommonStyles.Colors.actionColor,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40
    },
    buttonText: {
        fontSize: CommonStyles.TextSizes.Medium,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
};

export const TrackingListItemStyle = {
    container: {
        ...CommonStyles.tileStyle,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center'
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
