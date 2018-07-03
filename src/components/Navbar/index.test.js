import React from 'react';
import Navbar from './index';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
let isOpen = false;
const showHideNavBar = () => {
  isOpen = !isOpen;
}
test('Navbar class is toggled when the button is clicked', () => {
  let component = renderer.create(<MemoryRouter initialEntries={[ '/' ]}><Navbar showHideNavBar={showHideNavBar} isOpen={isOpen} /></MemoryRouter>);
  let tree = component.toJSON();
  let method = component.root.props.children.props.showHideNavBar;
  expect(tree).toMatchSnapshot();
  method();
  expect(tree).toMatchSnapshot();
  method();
  expect(tree).toMatchSnapshot();
});