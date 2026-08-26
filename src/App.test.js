import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name and role from resume', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Abhishek Srivastava/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Senior Frontend Developer/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/KOSH/i).length).toBeGreaterThan(0);
});
