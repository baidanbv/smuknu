import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './Button';

test('renders button with provided title', () => {
  const btnTitle = 'Click me';
  render(<Button btnTitle={btnTitle} />);
  const buttonElement = screen.getByTestId('Button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent(btnTitle);
});
