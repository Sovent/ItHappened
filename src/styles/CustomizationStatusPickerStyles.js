import * as CommonStyles from './CommonStyles';

const CustomizationStatusPickerStyles = {
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
    }
};

export default CustomizationStatusPickerStyles;

