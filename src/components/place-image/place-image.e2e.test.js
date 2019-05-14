import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceImage from '@/components/place-image/place-image.jsx';

configure({adapter: new Adapter()});

describe(`PlaceImage`, () => {
  it(`should call callback by clicking`, () => {
    const clickHandler = jest.fn();
    const clickHandlerPrevention = jest.fn();
    const wrapper = shallow(<PlaceImage img={`apartment.jpg`} handleClick={clickHandler} />);

    wrapper.find(`a`).simulate(`click`, {preventDefault: clickHandlerPrevention});

    expect(clickHandlerPrevention).toHaveBeenCalledTimes(1);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
