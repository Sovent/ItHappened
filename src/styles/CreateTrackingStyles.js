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
        fontSize: CommonStyles.TextSizes.Large,
        color: CommonStyles.Colors.primaryTextColor
    },
    choiceContainer: {
        ...CommonStyles.containerStyle,
        paddingHorizontal: 0
    },
    buttonGroupContainerStyle: {
        ...CommonStyles.tileStyle,
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: CommonStyles.defaultInnerMargin
    },
    buttonGroupTextStyle: {
        color: CommonStyles.Colors.secondaryTextColor,
        fontSize: CommonStyles.TextSizes.Medium
    },
    buttonGroupSelectedButtonStyle: {
        backgroundColor: CommonStyles.Colors.activeControlBackgroundColor,
        borderColor: CommonStyles.Colors.activeControlBackgroundColor
    },
    buttonGroupSelectedTextStyle: {
        color: 'white'
    },
    statusHint: {
        color: CommonStyles.Colors.secondaryTextColor,
        fontSize: CommonStyles.TextSizes.Small
    },
    finishButtonColor: CommonStyles.Colors.actionColor,
    illustrationContainerStyle: {
        ...CommonStyles.containerStyle,
        ...CommonStyles.tileStyle,
        alignSelf: 'center',
        alignItems: 'center'
    },
    illustrationHeaderStyle: {
        color: CommonStyles.Colors.primaryTextColor,
        fontSize: CommonStyles.TextSizes.Large
    }
};
