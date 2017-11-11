import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import XText from '../Text';
import Styles from './ButtonStyles';

class XButton extends Component {

    renderLoadingIndicator() {
        return (
            <View style={ Styles.loadingStateButtonIndicator }>
                <ActivityIndicator
                    color='white' />
            </View>
        )
    }

    render() {
        const {
            type,
            size,
            color,
            isLoading,
            isDisabled,
            hasChildren,
            opacity,
            activeOpacity,
        } = this.props;

        const style = StyleSheet.flatten([
            !hasChildren && Styles[`${ type }TypeButton`],
            Styles[`${ size }SizeButton`],
            Styles[`${ color }ColorButton`],
            isLoading && Styles.loadingStateButton,
            isDisabled && Styles.disabledStateButton,
            this.props.style || {},
        ]);

        const textColor = ['default', 'transparent'].indexOf(color) > -1 ? null : 'white';

        return (
            <TouchableOpacity
                disabled={ this.props.isDisabled }
                onPress={ this.props.onPress }
                activeOpacity={ activeOpacity }
                style={ { opacity } }>
                <View style={ style }>
                    { this.props.isLoading ? this.renderLoadingIndicator() : null }
                    { hasChildren ? (
                        this.props.children
                    ) : (
                        <XText
                            color={ textColor }
                            size={ size }
                            weight='semibold'>
                            { this.props.children }
                        </XText>
                    )}
                </View>
            </TouchableOpacity>
        )
    }

}

XButton.defaultProps = {
    type: 'default',
    size: 'default',
    color: 'default',
    opacity: 1,
    activeOpacity: 0.8,
}

export default XButton;
