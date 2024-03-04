import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Accordeon from './Accordeon';

describe('<Accordeon />', () => {
  test('it should mount', () => {
    render(<Accordeon />);
    
    const accordeonQuestions = screen.getByTestId('Accordeon');

    expect(accordeonQuestions).toBeInTheDocument();
  });
});