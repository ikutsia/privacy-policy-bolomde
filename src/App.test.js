import { render, screen } from '@testing-library/react';
import App from './App';

test('renders privacy policy content', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /privacy policy for bolomde/i });
  expect(heading).toBeInTheDocument();
});
