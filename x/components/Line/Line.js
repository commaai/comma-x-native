import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import LineStyles from './LineStyles';

export default (theme) => {
    let Styles = LineStyles(theme);

    return class XLine extends Component {
        static defaultProps = {
            type: 'default',
            color: 'default',
            size: 'default',
        };

        render() {
            const {
                type,
                color,
                size,
            } = this.props;

            const style = StyleSheet.flatten([
                Styles[`${ type }TypeLine`],
                Styles[`${ color }ColorLine`],
                Styles[`${ size }SizeLine`],
                this.props.style || {},
            ])

            return (
                <View { ...this.props } style={ style } />
            )
        }
    }

}
