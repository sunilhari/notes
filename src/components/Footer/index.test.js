import React from 'react';
import Footer from './index';
import renderer from 'react-test-renderer';

test('It Renders Footer without error', () => {
  const component = renderer.create(<Footer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});