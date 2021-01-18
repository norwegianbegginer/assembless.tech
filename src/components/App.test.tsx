import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home text', () => {
  render(<App />);
  const el = screen.getByText(/Home/i);
  expect(el).toBeInTheDocument();
});
