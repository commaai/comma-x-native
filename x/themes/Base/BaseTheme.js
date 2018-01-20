import { Colors } from './BaseColors';

export const BaseTheme = {
    colors: { ...Colors },
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
    },
    line: {
        sizes: {
            tiny: 0.5,
            small: 1,
            default: 2,
            medium: 5,
            big: 8,
            jumbo: 13,
        },
        spacing: {
            none: 0,
            tiny: 10,
            small: 15,
            default: 20,
            medium: 30,
            big: 40,
            jumbo: 60,
        },
        colors: {
            default: Colors.lightGrey200,
            lightGrey: Colors.lightGrey500,
            darkGrey: Colors.grey900,
            white: Colors.white,
        },
    },
    avatar: {
        defaults: {
            backgroundColor: Colors.lightGrey200,
            borderColor: 'transparent',
            borderRadius: 5,
            borderWidth: 1,
        },
        sizes: {
            tiny: 30,
            small: 40,
            default: 60,
            medium: 80,
            big: 100,
            jumbo: 150,
        },
        colors: {
            default: Colors.lightGrey200,
            white: Colors.white,
        },
    },
    statusBar: {
        types: {
            absolute: {
                zIndex: 100,
            },
        },
    },
    gradient: {
        colors: {
            light_grey: [
                'rgb(245, 246, 246)',
                'rgb(236, 237, 237)'
            ],
            dark_blue: [
                'rgb(7, 35, 57)',
                'rgb(5, 26, 43)'
            ],
            blue: [
                'rgb(12,52,82)',
                'rgb(9,38,60)'
            ],
            transparent_white: [
                'white',
                'transparent'
            ],
        },
    },
}
