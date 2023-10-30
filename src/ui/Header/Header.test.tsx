import { render, screen } from '@testing-library/react';
import { Header } from "./Header";

test('Header renders ok', () => {
  render(<Header />);
  const codeMessage = screen.getByAltText(/Dreadful Cherry Tomatoes logo/i);
  expect(codeMessage).toBeInTheDocument();
});
