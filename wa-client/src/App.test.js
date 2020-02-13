import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import CreateArea from "./components/CreateArea";

test('renders learn react link', () => {
  const testMessage = 'CreateArea';
  render(<CreateArea/>)
});
