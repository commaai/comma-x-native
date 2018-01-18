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
            spacing: 'default',
        };

        render() {
            const {
                type,
                color,
                size,
                spacing,
            } = this.props;

            const style = StyleSheet.flatten([
                Styles[`${ type }TypeLine`],
                Styles[`${ color }ColorLine`],
                Styles[`${ size }SizeLine`],
                Styles[`${ spacing }SpacingLine`],
                this.props.style || {},
            ])

            return (
                <View { ...this.props } style={ style } />
            )
        }
    }

}
