/*

    comma x native
    ~~~~~~~~~~~~~~~

    UI library for react-native

    :copyright: (c) 2017, comma.ai
    :license: See LICENSE for more details
    :source: https://github.com/commaai/comma-x-native

*/

import _ from 'lodash';
import BaseTheme from './x/themes/Base';
import Button from './x/components/Button';
import Gradient from './x/components/Gradient';
import Image from './x/components/Image';
import Text from './x/components/Text';

export default function X(THEME) {
    const theme = _.merge(BaseTheme, THEME);
    return {
        Button: Button(theme),
        Text: Text(theme),
        Gradient,
        Image,
    }
}
