import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingleReview from './SingleReview';

describe('<SingleReview />', () => {
  test('it should mount', () => {
    render(<SingleReview />);
    
    const singleReview = screen.getByTestId('SingleReview');

    expect(singleReview).toBeInTheDocument();
  });
});