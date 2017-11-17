import { StyleSheet } from 'react-native';

export default (theme) => {
    let TextStyles = {
        defaultTypeText: {
            backgroundColor: 'transparent',
        }
    };

    // Assign Text Sizes
    Object.keys(theme.text.sizes).map((size) => {
        TextStyles[`${ size }SizeText`] = {
            fontSize: theme.text.sizes[size],
        }
    })

    // Assign Text Colors
    Object.keys(theme.text.colors).map((color) => {
        TextStyles[`${ color }ColorText`] = {
            color: theme.text.colors[color],
        }
    })

    // Assign Text Weights
    Object.keys(theme.text.weights).map((weight) => {
        TextStyles[`${ weight }WeightText`] = {
            fontFamily: theme.text.weights[weight],
        }
    })

    return StyleSheet.create(TextStyles);
}
