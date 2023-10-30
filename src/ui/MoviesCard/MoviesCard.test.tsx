import { render, screen } from '@testing-library/react';
import { MoviesCard } from "./MoviesCard";
import { MoviesInfo } from '../types'

describe("MoviesCard", () => {
  const mockMovie: MoviesInfo = {
    images: "https://example.com/poster.jpg",
    title: "Exmachina",
    releaseYear: 2007,
    description: "A movie about a programer and his creation",
  };
  test("should render movies correctly",  () => {
    render(<MoviesCard {...mockMovie} />);

    const imageElement = screen.getByAltText("Image from movie");
    const titleElement = screen.getByRole('heading', { level: 2, name: mockMovie.title });
    const releaseYearElement = screen.getByText(mockMovie.releaseYear.toString());
    const descriptionElement = screen.getByText(mockMovie.description);

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(releaseYearElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});