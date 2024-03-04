import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SuccessPopup from './SuccessPopup';

describe('<SuccessPopup />', () => {
  test('it should mount', () => {
    render(<SuccessPopup />);
    
    const modalPopup = screen.getByTestId('SuccessPopup');

    expect(modalPopup).toBeInTheDocument();
  });
});