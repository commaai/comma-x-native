import { StyleSheet } from 'react-native';

export default (theme) => {
    let RadioFieldStyles = {
        defaultTypeRadioField: {
            alignItems: 'center',
            flexDirection: 'row',
        },
        defaultTypeRadioFieldDisabled: {
            opacity: theme.radioField.defaults.opacityDisabled,
        },
        defaultTypeRadioFieldInput: {
            borderWidth: theme.radioField.defaults.inputBorderWidth,
            padding: theme.radioField.defaults.inputPadding,
        },
        defaultTypeRadioFieldInputChecked: {
            borderWidth: theme.radioField.defaults.inputBorderWidthChecked,
        },
        defaultTypeRadioFieldCheckIcon: {
            opacity: theme.radioField.defaults.checkIconOpacity,
        },
        defaultTypeRadioFieldLabel: {
            paddingLeft: theme.radioField.defaults.labelPaddingLeft,
        },
        defaultTypeRadioFieldAppend: {
            opacity: theme.radioField.defaults.appendOpacity,
        },
        defaultTypeRadioFieldAppendChecked: {
            opacity: theme.radioField.defaults.appendOpacityChecked,
        },
    };

    // Assign RadioField Sizes
    Object.keys(theme.radioField.sizes).map((size) => {
        RadioFieldStyles[`${ size }SizeRadioField`] = {
            height: theme.radioField.sizes[size],
            marginBottom: (theme.radioField.sizes[size]/2.5),
        };
        RadioFieldStyles[`${ size }SizeRadioFieldInput`] = {
            borderRadius: (theme.radioField.sizes[size]/2),
            height: theme.radioField.sizes[size],
            width: theme.radioField.sizes[size],
        };
        RadioFieldStyles[`${ size }SizeRadioFieldLabel`] = {
            fontSize: theme.radioField.sizes[`${ size }Label`],
        };
        RadioFieldStyles[`${ size }SizeRadioFieldAppend`] = {
            height: (theme.radioField.sizes[size]/2),
            marginLeft: (theme.radioField.sizes[size]/2.5),
            width: (theme.radioField.sizes[size]/2),
        };
    })

    // Assign RadioField Colors
    Object.keys(theme.radioField.colors).map((color) => {
        RadioFieldStyles[`${ color }ColorRadioFieldInput`] = {
            backgroundColor: theme.radioField.colors[color]['input'],
            borderColor: theme.radioField.colors[color]['inputBorder'],
        };
        RadioFieldStyles[`${ color }ColorRadioFieldInputChecked`] = {
            backgroundColor: theme.radioField.colors[color]['inputChecked'],
            borderColor: theme.radioField.colors[color]['inputBorder'],
        };
        RadioFieldStyles[`${ color }ColorRadioFieldLabel`] = {
            color: theme.radioField.colors[color]['label'],
        };
    })

    return StyleSheet.create(RadioFieldStyles);
};
