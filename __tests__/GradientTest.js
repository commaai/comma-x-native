import React from 'react';
import { shallow } from 'enzyme';

import XN from '../X';
const X = XN();

it('renders as expected', () => {
    const wrapper = shallow(
        <X.Gradient
            color='dark_blue'>
            Dark Blue Gradient
        </X.Gradient>
    )
    expect(wrapper).toMatchSnapshot();
})
