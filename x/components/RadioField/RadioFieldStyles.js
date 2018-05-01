import { StyleSheet } from 'react-native';

export default (theme) => {
    let RadioFieldStyles = {
        defaultTypeRadioField: {
            alignItems: 'center',
            flexDirection: 'row',
        },
        defaultTypeRadioFieldDisabled: {
            opacity: 0.2,
        },
        defaultTypeRadioFieldInput: {
            borderWidth: 1,
            padding: '3%',
        },
        defaultTypeRadioFieldInputChecked: {
            borderWidth: 3,
        },
        defaultTypeRadioFieldCheckIcon: {
            opacity: 0.8,
        },
        defaultTypeRadioFieldLabel: {
            paddingLeft: '5%',
        },
        defaultTypeRadioFieldAppend: {
            opacity: 0.3,
        },
        defaultTypeRadioFieldAppendChecked: {
            opacity: 0.1,
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
