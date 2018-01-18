import { StyleSheet } from 'react-native';

export default (theme) => {
    let AvatarStyles = {
        defaultTypeAvatar: {
            backgroundColor: theme.avatar.defaults.backgroundColor,
            borderColor: theme.avatar.defaults.borderColor,
            borderRadius: theme.avatar.defaults.borderRadius,
            borderWidth: theme.avatar.defaults.borderWidth,
        },
    };

    // Assign Avatar Sizes
    Object.keys(theme.avatar.sizes).map((size) => {
        AvatarStyles[`${ size }SizeAvatar`] = {
            height: theme.avatar.sizes[size],
            width: theme.avatar.sizes[size],
        }
    })

    return StyleSheet.create(AvatarStyles);
}
