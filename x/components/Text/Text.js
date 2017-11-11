import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import TextStyles from './TextStyles';

class XText extends Component {
    render() {
        const {
            color,
            size,
            type,
            weight,
        } = this.props;

        const style = StyleSheet.flatten([
            TextStyles[`${ type }TypeText`],
            TextStyles[`${ color }ColorText`],
            TextStyles[`${ size }SizeText`],
            TextStyles[`${ weight }WeightText`],
            this.props.style || {},
        ])

        return (
            <Text { ...this.props } style={ style }>
                { this.props.children }
            </Text>
        )
    }
}

XText.defaultProps = {
    type: 'default',
    color: 'default',
    size: 'default',
    weight: 'regular',
}

export default XText;
