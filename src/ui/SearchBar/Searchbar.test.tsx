import { render, screen } from '@testing-library/react';
import { Searchbar } from "./Searchbar";
import iconSearch from "./search.svg";


test('Header renders ok', () => {
  render(<Searchbar 
  search="the martian"
  handleSearch={function(): void {
    throw new Error('Function not implemented.');
  }}/>);
  const imgElement = screen.getByAltText(/icon search/i);
  expect(imgElement).toBeInTheDocument();
  const inputPlaceholder = screen.getByPlaceholderText(/Title/i);
  expect(inputPlaceholder).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('src', iconSearch);

  
});