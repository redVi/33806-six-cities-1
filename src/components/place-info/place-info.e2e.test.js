import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceInfo from '@/components/place-info/place-info';

configure({adapter: new Adapter()});

describe(`PlaceInfo`, () => {
  it(`should call callback by clicking on title`, () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(
        <PlaceInfo
          name={`Nice, cozy, warm big bed apartment`}
          price={120}
          titleHandler={clickHandler}
        />
    );
    const title = wrapper.find(`.place-card__name`);
    expect(title.length).toEqual(1);

    title.simulate(`click`);
    expect(clickHandler.mock.calls.length).toEqual(1);
  });
});
