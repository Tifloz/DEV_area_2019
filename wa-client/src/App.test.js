import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import SignIn from "./components/Copyright";

test('renders learn react link', () => {
  const testMessage = 'Copyright';
  render(<Copyright/>)
});
