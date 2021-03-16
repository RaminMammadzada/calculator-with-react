import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonPanel from '../ButtonPanel';

const handleClick = () => ({ total: '0', next: '0', operation: 'x' });

describe('Button Panel', () => {
  it('should render the Button panel component', () => {
    const tree = ReactTestRenderer.create(<ButtonPanel clickHandler={handleClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should create the Button Panel component', () => {
    render(<ButtonPanel clickHandler={handleClick} />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });
});
