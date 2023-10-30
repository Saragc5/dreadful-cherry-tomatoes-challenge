import { render, screen } from '@testing-library/react';
import { Pagination } from "./Pagination";

test('Pagination renders code section', () => {
  render(<Pagination totalMovies={20} currentPage={1} 
    setCurrentPage={function (pageNumber: number): void {
    throw new Error('Function not implemented.');
  } } lastMovieIndex={12} lastPage={1} />);
  
  const numberPage = screen.getByRole("button-pageNumber");
  const prevAndNext = screen.getByRole("button-prevandnext");
  expect(numberPage).toBeInTheDocument();
  expect(prevAndNext).toBeInTheDocument();
});