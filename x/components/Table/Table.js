import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import TableStyles from './TableStyles';

export default (theme) => {
    let Styles = TableStyles(theme);

    return class XTable extends Component {
        static defaultProps = {
            type: 'default',
            color: 'default',
            size: 'default',
            padding: 'default',
            spacing: 'default',
            direction: 'column',
        };

        render() {
            const {
                type,
                color,
                size,
                spacing,
                padding,
                value,
                direction,
            } = this.props;

            const tableStyle = [
                Styles[`${ type }TypeTable`],
                Styles[`${ color }ColorTable`],
                Styles[`${ size }SizeTable`],
                Styles[`${ spacing }SpacingTable`],
                Styles[`${ padding }PaddingTable`],
                Styles[`${ direction }DirectionTable`],
                this.props.style || {},
            ];

            return (
                <View { ...this.props } style={ tableStyle }>
                    { this.props.children }
                </View>
            )
        }
    }

}
