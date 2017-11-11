import { StyleSheet } from 'react-native';
import { Theme } from '../../themes';

let ButtonStyles = {
    defaultTypeButton: {
        alignItems: 'center',
        borderRadius: Theme.button.defaults.radius,
        borderWidth: Theme.button.defaults.borderWidth,
        justifyContent: 'center',
        paddingLeft: Theme.button.defaults.padding,
        paddingRight: Theme.button.defaults.padding,
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
Object.keys(Theme.button.sizes).map((size) => {
    ButtonStyles[`${ size }SizeButton`] = {
        height: Theme.button.sizes[size],
    }
})

// Assign Button Colors
Object.keys(Theme.button.colors).map((color) => {
    ButtonStyles[`${ color }ColorButton`] = {
        backgroundColor: Theme.button.colors[color].background,
        borderColor: Theme.button.colors[color].border,
    }
})

export default StyleSheet.create(ButtonStyles);
