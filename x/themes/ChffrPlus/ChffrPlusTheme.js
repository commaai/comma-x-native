import _ from 'lodash';

import { Colors } from '../Colors';
import ChffrTheme from '../Chffr';
const _ChffrTheme = JSON.parse(JSON.stringify(ChffrTheme));

export let ChffrPlusTheme = _.merge(_ChffrTheme, {
    text: {
        sizes: {
            tiny: 14,
            small: 16,
            default: 18,
            medium: 20,
            big: 24,
            jumbo: 28,
        },
    },
})
