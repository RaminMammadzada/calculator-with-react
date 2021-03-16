import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

const handleClick = () => ({ total: '0', next: '0', operation: 'x' });

describe('Button', () => {
  it('should render the Button component', () => {
    const tree = ReactTestRenderer.create(<Button handleClick={handleClick} buttonName="0" styling="zero-style" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Button component', () => {
    render(<Button handleClick={handleClick} buttonName="0" styling="zero-style" />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });
});
