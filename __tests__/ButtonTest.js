import React from 'react';
import { shallow } from 'enzyme';

import XN from '../X';
const X = XN();

it('renders as expected', () => {
    const wrapper = shallow(
        <X.Button
            size='jumbo'
            color='blue'>
            Blue jumbo-sized button
        </X.Button>
    )
    expect(wrapper).toMatchSnapshot();
})
