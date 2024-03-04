import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeaturedBeauty from './FeaturedProducts';

describe('<FeaturedBeauty />', () => {
  test('it should mount', () => {
    render(<FeaturedBeauty />);

    const featuredBeauty = screen.getByTestId('FeaturedBeauty');

    expect(featuredBeauty).toBeInTheDocument();
  });
});
