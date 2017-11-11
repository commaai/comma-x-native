import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
} from 'react-native';

import Styles from './ImageStyles';

export default class XIMage extends Component {
    render() {
        const style = [
            this.props.isFlex !== false && Styles.flexImage,
            this.props.style || {},
        ];

        return (
            <Image { ...this.props } style={ style }>
                { this.props.children }
            </Image>
        )
    }
}
