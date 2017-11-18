import React from 'react';
import { shallow } from 'enzyme';

import XN from '../X';
const X = XN();

it('renders as expected', () => {
    const wrapper = shallow(
        <X.Text
            size='jumbo'
            color='white'>
            White jumbo-sized text
        </X.Text>
    )
    expect(wrapper).toMatchSnapshot();
})
