import { StyleSheet } from 'react-native';

export default (theme) => {
    let ButtonStyles = {
        defaultTypeButton: {
            alignItems: 'center',
            borderRadius: theme.button.defaults.radius,
            borderWidth: theme.button.defaults.borderWidth,
            justifyContent: 'center',
            paddingLeft: theme.button.defaults.padding,
            paddingRight: theme.button.defaults.padding,
        },
        disabledStateButton: {
            opacity: 0.6,
        },
        loadingStateButtonIndicator: {
            position: 'absolute',
            left: 30,
        },
    };

    // Assign Button Sizes
    Object.keys(theme.button.sizes).map((size) => {
        ButtonStyles[`${ size }SizeButton`] = {
            height: theme.button.sizes[size],
        }
    })

    // Assign Button Colors
    Object.keys(theme.button.colors).map((color) => {
        ButtonStyles[`${ color }ColorButton`] = {};
        Object.keys(theme.button.colors[color]).map((key) => {
            ButtonStyles[`${ color }ColorButton`][key] = theme.button.colors[color][key];
        })
    })

    return StyleSheet.create(ButtonStyles);
};
