import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LayOutPage from './LayOutPage';

describe('<LayOutPage />', () => {
  test('it should mount', () => {
    render(<LayOutPage />);
    
    const layOutPage = screen.getByTestId('LayOutPage');

    expect(layOutPage).toBeInTheDocument();
  });
});