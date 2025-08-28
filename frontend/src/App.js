import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello from frontend! message', () => {
  render(<App />);
  const messageElement = screen.getByText(/Hello from frontend!/i);
  expect(messageElement).toBeInTheDocument();
});
