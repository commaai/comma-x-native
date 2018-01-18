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
            size: 'default',
            image: null,
            imageStyle: null,
            imageIsFlex: true,
            imageResizeMode: 'contain',
        };

        render() {
            const {
                type,
                shape,
                size,
                image,
                imageIsFlex,
                imageResizeMode,
            } = this.props;

            const style = [
                Styles[`${ type }TypeAvatar`],
                Styles[`${ size }SizeAvatar`],
                shape === 'circle' && { borderRadius: theme.avatar.sizes[size]/2 },
                this.props.style || {},
            ]

            const imageStyle = [
                shape === 'square' && { borderRadius: theme.avatar.defaults.borderRadius },
                shape === 'circle' && { borderRadius: theme.avatar.sizes[size]/2 },
                this.props.imageStyle || {},
            ]

            return (
                <View { ...this.props } style={ style }>
                    <XImage
                        source={ image }
                        isFlex={ imageIsFlex }
                        resizeMode={ imageResizeMode }
                        style={ imageStyle }
                        height={ theme.avatar.sizes[size] } />
                </View>
            )
        }
    }

}
