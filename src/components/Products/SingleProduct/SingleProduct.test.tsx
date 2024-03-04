import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingleProduct from './SingleProduct';

describe('<SingleProduct />', () => {
  test('it should mount', () => {
    render(<SingleProduct />);
    
    const singleProduct = screen.getByTestId('SingleProduct');

    expect(singleProduct).toBeInTheDocument();
  });
});