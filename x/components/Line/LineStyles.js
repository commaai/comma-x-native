import { StyleSheet } from 'react-native';

export default (theme) => {
    let LineStyles = {
        defaultTypeLine: {
            width: '100%',
        },
    };

    // Assign Line Sizes
    Object.keys(theme.line.sizes).map((size) => {
        LineStyles[`${ size }SizeLine`] = {
            height: theme.line.sizes[size],
        }
    })

    // Assign Line Spacing
    Object.keys(theme.line.spacing).map((spacing) => {
        LineStyles[`${ spacing }SpacingLine`] = {
            marginTop: theme.line.spacing[spacing],
            marginBottom: theme.line.spacing[spacing],
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
