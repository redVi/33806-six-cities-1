import React from 'react';
import renderer from 'react-test-renderer';
import App from '@/components/app/app.jsx';

describe(`App`, () => {
  it(`renders places correctly`, () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
