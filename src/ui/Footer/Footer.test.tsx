import { render, screen } from '@testing-library/react';
import { Footer } from './Footer'

test('Footer renders ok', () => {
  render(<Footer />);
  const dreadfulLogo = screen.getByAltText(/Dreadful Cherry Tomatoes logo/i);
  const AppleLogo = screen.getByAltText(/Google Play logo/i);
  const copyRight = screen.getByTitle("Copyright");

  expect(dreadfulLogo).toBeInTheDocument();
  expect(AppleLogo).toBeInTheDocument();
  expect(copyRight).toBeInTheDocument();
});