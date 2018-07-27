import * as CommonStyles from './CommonStyles';

export const CreateTrackingStyle = {
    container: {
        flex: 1
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
    formLabelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    formInputContainer: {
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0
    },
    formInput: {
        fontSize: CommonStyles.TextSizes.Medium,
        color: CommonStyles.Colors.primaryTextColor   
    },
    formLabel: {
        fontSize: CommonStyles.TextSizes.Large,
        marginBottom: 8,
        color: CommonStyles.Colors.primaryTextColor
    },
    egBadge: {
        marginBottom: 8,
        marginRight: 8,
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
    },
    proceedButtonColor: CommonStyles.Colors.controlsBackgroundColor,
    proceedButtonStyle: {
        ...CommonStyles.tileStyle,
        borderColor: CommonStyles.Colors.controlsBackgroundColor,
        width: 200,
        alignSelf: 'center'
    }
};
