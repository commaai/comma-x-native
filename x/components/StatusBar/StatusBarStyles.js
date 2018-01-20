import { StyleSheet, Platform } from 'react-native';

export default (theme) => {
    let StatusBarStyles = {
        defaultTypeStatusBar: {},
        absoluteTypeStatusBar: {
            position: 'absolute',
            top: 0,
            width: '100%',
            zIndex: theme.statusBar.types.absolute.zIndex,
        },
    };

    return StyleSheet.create(StatusBarStyles);
}
