import { StyleSheet } from 'react-native';

export default (theme) => {
    let LineStyles = {
        defaultTypeLine: {
            marginTop: theme.line.defaults.marginTop,
            marginBottom: theme.line.defaults.marginBottom,
            width: '100%',
        },
    };

    // Assign Line Sizes
    Object.keys(theme.line.sizes).map((size) => {
        LineStyles[`${ size }SizeLine`] = {
            height: theme.line.sizes[size],
        }
    })

    // Assign Line Colors
    Object.keys(theme.line.colors).map((color) => {
        LineStyles[`${ color }ColorLine`] = {
            backgroundColor: theme.line.colors[color],
        }
    })

    return StyleSheet.create(LineStyles);
}
