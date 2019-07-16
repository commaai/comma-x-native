import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Switch,
} from 'react-native';
import XImage from '../Image';
import XNText from '../Text';

import TableCellStyles from './TableCellStyles';

export default (theme) => {
    const XText = XNText(theme);
    let Styles = TableCellStyles(theme);

    return class XTableCell extends Component {
        static defaultProps = {
            type: 'default',
            color: 'default',
            size: 'default',
            spacing: 'default',
            iconSource: null,
            value: null,
            isExpanded: false,
            handleExpanded: null,
            handleChanged: null,
            titleTextSize: 'small',
            valueTextSize: 'small',
            isDisabled: false,
        };

        render() {
            const {
                key,
                type,
                color,
                size,
                spacing,
                iconSource,
                value,
                title,
                description,
                descriptionExtra,
                isExpanded,
                handleExpanded,
                handleChanged,
                titleTextSize,
                valueTextSize,
                children,
                isDisabled,
            } = this.props;

            const titleTextColor = 'white';
            const valueTextColor = 'white';

            const tableCellStyle = [
                Styles[`${ type }TypeTableCell`],
                Styles[`${ color }ColorTableCell`],
                Styles[`${ size }SizeTableCell`],
                Styles[`${ spacing }SpacingTableCell`],
                isExpanded ? Styles[`isExpandedStateTableCell`] : null,
                this.props.style || {},
            ];

            const tableCellHeaderStyle = [
                Styles[`${ size }SizeTableCellHeader`],
            ];

            const tableCellDrawerStyle = [
                Styles[`${ size }SizeTableCellDrawer`],
            ];

            const tableCellIconStyle = [
                Styles[`${ type }TypeTableCellIcon`],
            ];

            const tableCellTitleStyle = [
                Styles[`${ type }TypeTableCellTitle`],
            ];

            const tableCellTypeStyle = [
                Styles[`${ type }TypeTableCellType`],
            ];

            const tableCellInputStyle = [
                Styles[`${ type }TypeTableCellInput`],
                isDisabled ? Styles[`isDisabledStateTableCellInput`] : null,
            ];

            const thumbColor = isDisabled ? 'rgba(233,233,233,0.3)' : '#ffffff';

            return (
                <View { ...this.props } style={ tableCellStyle }>
                    <TouchableWithoutFeedback
                        style={ tableCellHeaderStyle }
                        onPress={ handleExpanded }>
                        <View style={ tableCellHeaderStyle }>
                            { iconSource !== null ? (
                                <XImage
                                    source={ iconSource }
                                    style={ tableCellIconStyle } />
                            ) : null }
                            <XText
                                color={ titleTextColor }
                                size={ titleTextSize }
                                style={ tableCellTitleStyle }
                                weight='semibold'>
                                { title }
                            </XText>
                            <View style={ tableCellTypeStyle }>
                                { type == 'default' ? (
                                    <XText
                                        color={ valueTextColor }
                                        size={ valueTextSize }>
                                        { value }
                                    </XText>
                                ) : null }
                                { type == 'switch' ? (
                                    <Switch
                                        disabled={ isDisabled }
                                        value={ value }
                                        style={ tableCellInputStyle }
                                        onTintColor='rgba(233,233,233,0.5)'
                                        onValueChange={ handleChanged }
                                        thumbTintColor={ thumbColor } />
                                ) : null }
                                { type == 'custom' ? (
                                    <View>
                                        { children }
                                    </View>
                                ) : null }
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    { description == null ? null :
                        <View style={ tableCellDrawerStyle }>
                            <XText
                                color='white'
                                size='tiny'>
                                { description }
                            </XText>
                        </View>
                    }
                    { descriptionExtra != null ? descriptionExtra : null }
                </View>
            )
        }
    }

}
