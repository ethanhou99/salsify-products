import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import SelectionBox from '../components/SelectionBox';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const defaultProps = { 
  items: ['Product Name', 'color', 'weight (oz)', 'category', 'wireless'],
  defaultVal: 'Select a Property',
  func: jest.fn()
};

describe('Selection Box test', () => {
  it('Selection box should render correctly', () => {
    const component = render(<SelectionBox {...defaultProps}/>)
    expect(component.firstChild).toMatchSnapshot()
   })

   it('User should able to select from the selection box', () => {
    const {getByText} = render(<SelectionBox {...defaultProps}/>);
    fireEvent.select(getByText('Select a Property'));
    expect(getByText('Select a Property')).toBeTruthy();
  });
});