import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckoutForm from './CheckoutForm';

describe('<CheckoutForm />', () => {
  test('it should mount', () => {
    render(<CheckoutForm />);
    
    const checkoutForm = screen.getByTestId('CheckoutForm');

    expect(checkoutForm).toBeInTheDocument();
  });
});