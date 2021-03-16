import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../Display';

describe('Display', () => {
  it('should render the Display component', () => {
    const tree = ReactTestRenderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should create a Display component', () => {
    render(<Display result="0" />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });
});
