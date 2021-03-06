import * as CommonStyles from './CommonStyles';

const inheritStyles = {
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        ...CommonStyles.containerStyle,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: CommonStyles.Colors.headerBackgroundColor
    },
    headerText: {
        fontSize: CommonStyles.TextSizes.Large,
        color: 'white'
    },
    content: {
        ...CommonStyles.containerStyle,
        flex: 5,
        justifyContent: 'space-between'
    },
    block: {
        marginBottom: CommonStyles.defaultInnerMargin
    },
    formInputContainer: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom: CommonStyles.defaultInnerMargin
    },
    formInput: {
        fontSize: CommonStyles.TextSizes.Medium,
        color: CommonStyles.Colors.primaryTextColor,
        marginLeft: 0,
        marginRight: 0
    },
    formLabel: {
        fontSize: CommonStyles.TextSizes.Large,
        marginBottom: CommonStyles.defaultInnerMargin,
        color: CommonStyles.Colors.primaryTextColor
    },
    proceedButtonColor: CommonStyles.Colors.controlsBackgroundColor,
    proceedButtonStyle: {
        ...CommonStyles.tileStyle,
        borderColor: CommonStyles.Colors.controlsBackgroundColor,
        width: 200,
        alignSelf: 'center'
    },
    proceedButtonText: {
        color: 'white',
        fontSize: CommonStyles.TextSizes.Medium
    }
};
export const CreateTrackingStyle = {
    ...inheritStyles,
    formLabelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    egBadge: {
        marginBottom: CommonStyles.defaultInnerMargin,
        marginRight: CommonStyles.defaultInnerMargin,
        borderColor: CommonStyles.Colors.linkTextColor,
        borderWidth: 1,
        backgroundColor: 'transparent'
    },
    egLabel: {
        paddingVertical: 2,
        fontSize: CommonStyles.TextSizes.Medium,
        color: CommonStyles.Colors.linkTextColor
    },
    colorSlider: {
        alignSelf: 'stretch',
    }
};

export const AddCustomizationStyle = {
    ...inheritStyles,
    hintText: {
        fontSize: CommonStyles.TextSizes.Medium,
        color: CommonStyles.Colors.primaryTextColor,
        textAlign: 'center'
    },    
    finishButton: {
        ...inheritStyles.proceedButtonStyle,
        borderColor: CommonStyles.Colors.actionColor
    },
    finishButtonColor: CommonStyles.Colors.actionColor,
    illustrationCard: {
        alignSelf: 'stretch',
        margin: CommonStyles.defaultInnerMargin,
        flex: 1
    },
    illustrationCardSide: {
        ...CommonStyles.containerStyle,        
        ...CommonStyles.tileStyle,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    illustrationHeaderStyle: {
        color: CommonStyles.Colors.primaryTextColor,
        fontSize: CommonStyles.TextSizes.Large,
        marginBottom: CommonStyles.defaultInnerMargin,
        textAlign: 'center'
    },
    illustrationButtonStyle: {
        position: 'absolute',
        top: CommonStyles.defaultInnerMargin,
        right: CommonStyles.defaultInnerMargin,
        width: 25,
        height: 25,
        textAlign: 'center'
    },
    illustrationButtonColor: CommonStyles.Colors.activeControlBackgroundColor,
    ratingStyle: {
        alignItems: 'center'
    },
    metricIllustrationContainer: {
        ...CommonStyles.containerStyle,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    metricIllustrationUnitContainer: {
        ...CommonStyles.containerStyle,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '30%'
    },
    metricTitle: {
        ...CommonStyles.containerStyle,
        color: CommonStyles.Colors.primaryTextColor,
        fontSize: CommonStyles.TextSizes.Large,
        borderRightWidth: 1,
        borderColor: CommonStyles.Colors.secondaryTextColor,
        flexBasis: '70%',
        flexGrow: 5,
        flexShrink: 4
    },
    metricValue: {
        fontSize: CommonStyles.TextSizes.ExtraLarge,
        color: CommonStyles.Colors.primaryTextColor,        
        textAlign: 'center'
    },
    metricLabelStyle: {
        fontSize: CommonStyles.TextSizes.Small,
        color: CommonStyles.Colors.secondaryTextColor,
        textAlign: 'center'
    },
    commentaryContainer: {
        ...CommonStyles.containerStyle
    },
    commentaryTitle: {
        color: CommonStyles.Colors.primaryTextColor,
        fontSize: CommonStyles.TextSizes.Large,
        textAlign: 'left'
    },
    commentaryLabel: {
        fontSize: CommonStyles.TextSizes.Small,
        color: CommonStyles.Colors.secondaryTextColor,
        fontStyle: 'italic'
    },
    geoIllustrationContainer: {
        ...CommonStyles.containerStyle,
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: 100
    },
    geoIllustrationIcon: {
        maxHeight: 70,
        maxWidth: 70
    },
    geoIllustrationTitle: {
        ...CommonStyles.containerStyle,
        color: CommonStyles.Colors.primaryTextColor,
        fontSize: CommonStyles.TextSizes.Large,
        textAlign: 'left',
        flexShrink: 1
    }
};
