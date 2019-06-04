import React from 'react';
import {shallow} from 'enzyme';
import withActiveItem from '@/hocs/with-active-item/with-active-item';

const MockComponentWrapped = withActiveItem(() => <div />);

describe(`withActiveItem`, () => {
  it(`should correct change 'current' value`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.props().current).toEqual(undefined);

    wrapper.props().setActiveItem(2);
    expect(wrapper.props().current).toEqual(2);
  });
});
