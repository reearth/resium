import { render, screen } from '@testing-library/react';
import App from './App';

// Cesium doesn't work on Jest as Jest doesn't suport WebGL
test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
