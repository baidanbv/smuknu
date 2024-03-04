import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubscribeForm from './SubscribeForm';

describe('<SubscribeForm />', () => {
  test('it should mount', () => {
    render(<SubscribeForm />);
    
    const subscribeForm = screen.getByTestId('SubscribeForm');

    expect(subscribeForm).toBeInTheDocument();
  });
});