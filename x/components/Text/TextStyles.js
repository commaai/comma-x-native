import { StyleSheet } from 'react-native';
import { Theme } from '../../themes';

let TextStyles = {
    defaultTypeText: {
        backgroundColor: 'transparent',
    }
}

// Assign Text Sizes
Object.keys(Theme.text.sizes).map((size) => {
    TextStyles[`${ size }SizeText`] = {
        fontSize: Theme.text.sizes[size],
    }
})

// Assign Text Colors
Object.keys(Theme.text.colors).map((color) => {
    TextStyles[`${ color }ColorText`] = {
        color: Theme.text.colors[color],
    }
})

// Assign Text Weights
Object.keys(Theme.text.weights).map((weight) => {
    TextStyles[`${ weight }WeightText`] = {
        fontFamily: Theme.text.weights[weight],
    }
})

export default StyleSheet.create(TextStyles);
