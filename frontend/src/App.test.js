import { render, screen } from '@testing-library/react';
import App from './App';

test('renders frontend message', async () => {
  render(<App />);
  const messageElement = await screen.findByText(/hello from frontend/i);
  expect(messageElement).toBeInTheDocument();
});
