import { render, screen } from '@testing-library/react';
import App from './App';

test('renders frontend API message', () => {
  render(<App />);
  const messageElement = screen.getByText(/API says:/i);
  expect(messageElement).toBeInTheDocument();
});
