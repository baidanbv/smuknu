import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartPopup from './CartPopup';

describe('<CartPopup />', () => {
  test('it should mount', () => {
    render(<CartPopup />);
    
    const cartPopup = screen.getByTestId('CartPopup');

    expect(cartPopup).toBeInTheDocument();
  });
});