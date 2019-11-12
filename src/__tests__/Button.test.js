import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Button from '../components/Button';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Button test', () => {
  it('Button should render correctly', () => {
    const component = render(<Button />)
    expect(component.firstChild).toMatchSnapshot()
   })

   it('Function should be called after button click', () => {
    const onClick = jest.fn();
    const {getByText} = render(<Button onUpdate={onClick}/>);
    fireEvent.click(getByText('Clear'))
    expect(onClick).toHaveBeenCalled();
  });
});