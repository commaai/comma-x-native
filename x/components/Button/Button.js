import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import XNText from '../Text';
import ButtonStyles from './ButtonStyles';

export default (theme) => {
  const XText = XNText(theme);
  let Styles = ButtonStyles(theme);

  return class XButton extends Component {
      static defaultProps = {
          type: 'default',
          size: 'default',
          color: 'default',
          textColor: 'default',
          textWeight: 'semibold',
          opacity: 1,
          activeOpacity: 0.8,
      };

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
              textColor,
              textWeight,
              isLoading,
              isDisabled,
              opacity,
              activeOpacity,
              isFlex,
          } = this.props;

          const hasChildren = !(typeof this.props.children === 'string');
          const style = [
              !hasChildren && Styles[`${ type }TypeButton`],
              Styles[`${ size }SizeButton`],
              Styles[`${ color }ColorButton`],
              isLoading && Styles.loadingStateButton,
              isDisabled && Styles.disabledStateButton,
              this.props.style || {},
          ];

          const _textColor = ['default', 'transparent'].indexOf(color) > -1 ? textColor : 'white';

          return (
              <TouchableOpacity
                  disabled={ this.props.isDisabled }
                  onPress={ this.props.onPress }
                  activeOpacity={ activeOpacity }
                  style={ { opacity, flex: isFlex ? 1 : null, } }>
                  <View style={ style }>
                      { this.props.isLoading ? this.renderLoadingIndicator() : null }
                      { hasChildren ? (
                          this.props.children
                      ) : (
                          <XText
                              color={ _textColor }
                              size={ size }
                              weight={ textWeight }>
                              { this.props.children }
                          </XText>
                      )}
                  </View>
              </TouchableOpacity>
          )
      }

  }
}
