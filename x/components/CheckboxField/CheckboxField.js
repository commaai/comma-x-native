import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import XNText from '../Text';
import XNImage from '../Image';
import CheckboxFieldStyles from './CheckboxFieldStyles';

export default (theme) => {
  const XText = XNText(theme);
  let Styles = CheckboxFieldStyles(theme);

  return class XCheckboxField extends Component {
      static defaultProps = {
          type: 'default',
          size: 'default',
          color: 'default',
          textColor: 'default',
          label: 'Checkbox Label',
          opacity: 1,
          activeOpacity: 0.8,
          isChecked: false,
          checkIcon: require('../../assets/icon_checkmark.png'),
      };

      render() {
          const {
              type,
              size,
              color,
              textColor,
              opacity,
              activeOpacity,
              isChecked,
              checkIcon,
          } = this.props;

          const fieldStyle = [
              Styles[`${ type }TypeCheckboxField`],
              Styles[`${ size }SizeCheckboxField`],
              Styles[`${ color }ColorCheckboxField`],
              this.props.style || {},
          ];

          const fieldInputStyle = [
              Styles[`${ type }TypeCheckboxFieldInput`],
              Styles[`${ size }SizeCheckboxFieldInput`],
              Styles[`${ color }ColorCheckboxFieldInput`],
              isChecked && Styles[`${ color }ColorCheckboxFieldInputChecked`],
          ];

          const fieldCheckIconStyle = [
              Styles[`${ type }TypeCheckboxFieldCheckIcon`],
              Styles[`${ color }ColorCheckboxFieldCheckIcon`],
          ];

          const fieldLabelStyle = [
              Styles[`${ type }TypeCheckboxFieldLabel`],
              Styles[`${ size }SizeCheckboxFieldLabel`],
              Styles[`${ color }ColorCheckboxFieldLabel`],
          ];

          return (
              <TouchableOpacity
                  onPress={ this.props.onPress }
                  activeOpacity={ activeOpacity }
                  style={ { opacity } }>
                  <View style={ fieldStyle }>
                      <View style={ fieldInputStyle }>
                          { this.props.isChecked ? (
                              <XNImage
                                source={ this.props.checkIcon }
                                style={ fieldCheckIconStyle } />
                          ) : null }
                      </View>
                      <XText
                          color={ textColor }
                          weight='semibold'
                          style={ fieldLabelStyle }>
                          { this.props.label }
                      </XText>
                  </View>
              </TouchableOpacity>
          )
      }

  }
}
