import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import XImage from '../Image';
import AvatarStyles from './AvatarStyles';

export default (theme) => {
    let Styles = AvatarStyles(theme);

    return class XAvatar extends Component {
        static defaultProps = {
            type: 'default',
            shape: 'square',
            color: 'default',
            size: 'default',
            image: null,
            imageStyle: null,
            imageIsFlex: true,
            imageRadius: null,
            imageResizeMode: 'contain',
            imageTintColor: null,
        };

        render() {
            const {
                type,
                shape,
                size,
                color,
                image,
                imageIsFlex,
                imageResizeMode,
                imageRadius,
                imageTintColor,
            } = this.props;

            const style = [
                Styles[`${ type }TypeAvatar`],
                Styles[`${ size }SizeAvatar`],
                Styles[`${ color }ColorAvatar`],
                shape === 'circle' && { borderRadius: theme.avatar.sizes[size]/2 },
                this.props.style || {},
            ]

            const imageStyle = [
                shape === 'square' && { borderRadius: theme.avatar.defaults.borderRadius },
                shape === 'circle' && { borderRadius: theme.avatar.sizes[size]/2 },
                imageRadius !== null && { borderRadius: imageRadius },
                imageTintColor && { tintColor: imageTintColor },
                this.props.imageStyle || {},
            ]

            return (
                <View { ...this.props } style={ style }>
                    <XImage
                        source={ image }
                        isFlex={ imageIsFlex }
                        resizeMode={ imageResizeMode }
                        height={ theme.avatar.sizes[size] }
                        style={ imageStyle } />
                </View>
            )
        }
    }

}
