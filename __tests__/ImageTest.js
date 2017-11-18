import React from 'react';
import { shallow } from 'enzyme';

import XN from '../X';
const X = XN();

it('renders as expected', () => {
    const wrapper = shallow(
        <X.Image
            source={ require('../x/assets/comma-black.png') }>
            Blue jumbo-sized button
        </X.Image>
    )
    expect(wrapper).toMatchSnapshot();
})
