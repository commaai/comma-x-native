import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import GradientStyles from './GradientStyles';

export default (theme) => {
    let Styles = GradientStyles(theme);

    return class XGradient extends Component {
        static defaultProps = {
            type: 'default',
        };

        render() {
            const {
                type,
                color,
                colors,
            } = this.props;

            const style = [
                Styles[`${ type }TypeGradient`],
                this.props.style || {},
            ];

            return (
                <LinearGradient
                    { ...this.props }
                    colors={ (color !== null) ? theme.gradient.colors[color] : colors }
                    style={ style }>
                    { this.props.children }
                </LinearGradient>
            );
        }
    }
}
