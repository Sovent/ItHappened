const defaultFontSize = 18;

export const defaultInnerMargin = 8;

export const Colors = {
    controlsBackgroundColor: '#1F618D',
    activeControlBackgroundColor: '#1B577E',
    primaryTextColor: '#222',
    secondaryTextColor: '#333',
    actionColor: 'rgba(204,22,20,1)',
    linkTextColor: '#1F618D',
    headerBackgroundColor: '#42677F',
    ratingStarsColor: '#CCCB18'
};

export const TextSizes = {
    ExtraLarge: defaultFontSize * 1.5,
    Large: defaultFontSize * 1.3,
    Medium: defaultFontSize,
    Small: defaultFontSize * 0.8,
    Tiny: defaultFontSize * 0.6
};

export const containerStyle = {
    padding: 15,
};

export const tileStyle = {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 1,
    marginRight: 2,
    marginBottom: 2
};

export const menu = {
    menuOption: {
        optionWrapper: {
            ...containerStyle,
            width: '100%'
        },
        optionText: {
            fontSize: TextSizes.Medium,
            color: Colors.primaryTextColor,
            flex: 1,
            textAlign: 'center'
        }
    }
};
