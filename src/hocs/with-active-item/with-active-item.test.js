import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from '@/hocs/with-active-item/with-active-item.jsx';

configure({adapter: new Adapter()});

const MockComponentWrapped = withActiveItem(() => <div />);

describe(`withActiveItem`, () => {
  it(`should correct change 'current' value`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.props().current).toEqual(undefined);

    wrapper.props().setActiveItem(2);
    expect(wrapper.props().current).toEqual(2);
  });
});
