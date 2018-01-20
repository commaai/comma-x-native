import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Platform,
} from 'react-native';

import StatusBarStyles from './StatusBarStyles';

export default (theme) => {
    let Styles = StatusBarStyles(theme);

    return class XStatusBar extends Component {
        static defaultProps = {
            type: 'default',
            backgroundColor: null,
            barStyle: 'dark-content',
            hidden: false,
        };

        render() {
            const {
                type,
                backgroundColor,
                hidden,
            } = this.props;

            const style = [
                Styles[`${ type }TypeStatusBar`],
                {
                    backgroundColor,
                    display: hidden ? 'none' : null,
                    height: (Platform.OS === 'ios') ? 20 : 0,
                },
                this.props.style || {},
            ];

            return (
                <View style={ style }>
                    <StatusBar { ...this.props } />
                </View>
            )
        }
    }
}
