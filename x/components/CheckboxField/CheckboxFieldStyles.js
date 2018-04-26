import { StyleSheet } from 'react-native';

export default (theme) => {
    let CheckboxFieldStyles = {
        defaultTypeCheckboxField: {
            alignItems: 'center',
            flexDirection: 'row',
        },
        defaultTypeCheckboxFieldInput: {
            borderRadius: 3,
            borderWidth: 1,
        },
        defaultTypeCheckboxFieldInputChecked: {
            borderWidth: 3,
        },
        defaultTypeCheckboxFieldCheckIcon: {
            margin: '20%',
        },
        defaultTypeCheckboxFieldLabel: {
            paddingLeft: '5%',
        },
    };

    // Assign CheckboxField Sizes
    Object.keys(theme.checkboxField.sizes).map((size) => {
        CheckboxFieldStyles[`${ size }SizeCheckboxField`] = {
            height: theme.checkboxField.sizes[size],
            marginBottom: (theme.checkboxField.sizes[size]/2.5),
        };
        CheckboxFieldStyles[`${ size }SizeCheckboxFieldInput`] = {
            height: theme.checkboxField.sizes[size],
            width: theme.checkboxField.sizes[size],
        };
        CheckboxFieldStyles[`${ size }SizeCheckboxFieldLabel`] = {
            fontSize: theme.checkboxField.sizes[`${ size }Label`],
        };
    })

    // Assign CheckboxField Colors
    Object.keys(theme.checkboxField.colors).map((color) => {
        CheckboxFieldStyles[`${ color }ColorCheckboxFieldInput`] = {
            backgroundColor: theme.checkboxField.colors[color]['input'],
            borderColor: theme.checkboxField.colors[color]['inputBorder'],
        };
        CheckboxFieldStyles[`${ color }ColorCheckboxFieldInputChecked`] = {
            backgroundColor: theme.checkboxField.colors[color]['inputChecked'],
            borderColor: theme.checkboxField.colors[color]['inputBorder'],
        };
        CheckboxFieldStyles[`${ color }ColorCheckboxFieldLabel`] = {
            color: theme.checkboxField.colors[color]['label'],
        };
    })

    return StyleSheet.create(CheckboxFieldStyles);
};
