import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import TextStyles from './TextStyles';

export default (theme) => {
    let Styles = TextStyles(theme);

    return class XText extends Component {
        static defaultProps = {
            type: 'default',
            color: 'default',
            size: 'default',
            weight: 'regular',
        };

        render() {
            const {
                color,
                size,
                type,
                weight,
            } = this.props;

            const style = [
                Styles[`${ type }TypeText`],
                Styles[`${ color }ColorText`],
                Styles[`${ size }SizeText`],
                Styles[`${ weight }WeightText`],
                this.props.style || {},
            ];

            return (
                <Text { ...this.props } style={ style }>
                    { this.props.children }
                </Text>
            )
        }
    }

}
