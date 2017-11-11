import { Colors } from '../Colors';

export const ChffrTheme = {
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
            light: 'OpenSans-Light',
            regular: 'OpenSans-Regular',
            semibold: 'OpenSans-Semibold',
            bold: 'OpenSans-Bold',
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
                background: Colors.lightGrey500,
                border: Colors.lightGrey400,
            },
            primary: {
                background: Colors.blue50,
                border: Colors.blue100,
            },
            transparent: {
                background: Colors.transparent,
                border: Colors.lightGrey500,
            },
            inverted: {
                background: Colors.transparent,
                border: Colors.white,
            },
            blue: {
                background: Colors.blue50,
                border: Colors.blue100,
            },
            red: {
                background: Colors.red100,
                border: Colors.red200,
            },
            green: {
                background: Colors.green100,
                border: Colors.green200,
            },
        },
    }
}
