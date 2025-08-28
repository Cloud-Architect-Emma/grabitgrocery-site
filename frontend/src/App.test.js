import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByText(/API says:/i);
  expect(appElement).toBeInTheDocument();
});
