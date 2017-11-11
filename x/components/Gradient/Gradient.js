import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Styles from './GradientStyles';

export default class XGradient extends Component {

    getGradientColors() {
        const { color, colors } = this.props;
        switch (color) {
            case 'light_grey':
                return ['rgb(245, 246, 246)', 'rgb(236, 237, 237)'];
                break;
            case 'dark_blue':
                return ['rgb(7, 35, 57)', 'rgb(5, 26, 43)'];
                break;
            case 'blue':
                return ['rgb(12,52,82)', 'rgb(9,38,60)'];
                break;
            case 'transparent_white':
                return ['white', 'transparent'];
                break;
            default:
                return colors;
        }
    }

    render() {

        const style = [
            Styles.gradient,
            this.props.style || {},
        ];

        return (
            <LinearGradient
                { ...this.props }
                colors={ this.getGradientColors() }
                style={ style }>
                { this.props.children }
            </LinearGradient>
        );
    }

}
