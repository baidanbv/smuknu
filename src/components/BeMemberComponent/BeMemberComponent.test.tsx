import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BeMember from './BeMemberComponent';

describe('<BeMember />', () => {
  test('it should mount', () => {
    render(<BeMember />);

    const beMember = screen.getByTestId('BeMember');

    expect(beMember).toBeInTheDocument();
  });
});
