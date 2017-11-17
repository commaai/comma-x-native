import { Colors } from './BaseColors';

export const BaseTheme = {
    text: {
        sizes: {
            tiny: 12,
            small: 14,
            default: 16,
            medium: 18,
            big: 22,
            jumbo: 26,
        },
        weights: {
            light: null,
            regular: null,
            semibold: null,
            bold: null,
        },
        colors: {
            default: Colors.blue800,
            light: Colors.desatBlue800,
            darkGrey: Colors.grey900,
            white: Colors.white,
        },
    },
    button: {
        defaults: {
            borderWidth: 2,
            radius: 100,
            padding: '15%',
        },
        sizes: {
            tiny: 42,
            small: 50,
            default: 60,
            medium: 64,
            big: 68,
            jumbo: 72,
            full: '100%',
        },
        colors: {
            default: {
                backgroundColor: Colors.lightGrey500,
                borderColor: Colors.lightGrey400,
            },
            primary: {
                backgroundColor: Colors.blue50,
                borderColor: Colors.blue100,
            },
            transparent: {
                backgroundColor: Colors.transparent,
                borderColor: Colors.lightGrey500,
            },
            inverted: {
                backgroundColor: Colors.transparent,
                borderColor: Colors.white30,
                borderWidth: 1,
            },
            blue: {
                backgroundColor: Colors.blue50,
                borderColor: Colors.blue100,
            },
            red: {
                backgroundColor: Colors.red100,
                borderColor: Colors.red200,
            },
            green: {
                backgroundColor: Colors.green100,
                borderColor: Colors.green200,
            },
        },
    }
}
