/*

    comma x native
    ~~~~~~~~~~~~~~~

    UI library for react-native

    :copyright: (c) 2018, comma.ai
    :license: See LICENSE for more details
    :source: https://github.com/commaai/comma-x-native

*/

import _ from 'lodash';
import BaseTheme from './x/themes/Base';
import Button from './x/components/Button';
import Gradient from './x/components/Gradient';
import Image from './x/components/Image';
import Text from './x/components/Text';
import Line from './x/components/Line';
import Avatar from './x/components/Avatar';
import StatusBar from './x/components/StatusBar';
import Entrance from './x/components/Entrance';
import CheckboxField from './x/components/CheckboxField';
import RadioField from './x/components/RadioField';
import Table from './x/components/Table';
import TableCell from './x/components/TableCell';

export default function X(THEME) {
    const theme = _.merge(BaseTheme, THEME);
    return {
        theme: theme,
        Button: Button(theme),
        Text: Text(theme),
        Line: Line(theme),
        Avatar: Avatar(theme),
        StatusBar: StatusBar(theme),
        Gradient: Gradient(theme),
        Entrance: Entrance(theme),
        CheckboxField: CheckboxField(theme),
        RadioField: RadioField(theme),
        Table: Table(theme),
        TableCell: TableCell(theme),
        Image,
    }
}
