import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import SignIn from "./Components/SignIn";

test('renders learn react link', () => {
  const testMessage = 'Sign In'
  render(<SignIn/>)
});
