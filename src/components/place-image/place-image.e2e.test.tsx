import React from 'react';
import {shallow} from 'enzyme';
import PlaceImage from '@/components/place-image/place-image';

describe(`PlaceImage`, () => {
  it(`should call callback by clicking`, () => {
    const clickHandler = jest.fn();
    const clickHandlerPrevention = jest.fn();
    const wrapper = shallow(<PlaceImage previewImage={`apartment.jpg`} handleClick={clickHandler} />);

    wrapper.find(`a`).simulate(`click`, {preventDefault: clickHandlerPrevention});

    expect(clickHandlerPrevention).toHaveBeenCalledTimes(1);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
