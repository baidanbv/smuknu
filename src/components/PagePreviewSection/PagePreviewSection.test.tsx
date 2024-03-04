import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PagePreviewSection from './PagePreviewSection';

describe('<PagePreviewSection />', () => {
  test('it should mount', () => {
    render(<PagePreviewSection />);
    
    const pagePreviewSection = screen.getByTestId('PagePreviewSection');

    expect(pagePreviewSection).toBeInTheDocument();
  });
});