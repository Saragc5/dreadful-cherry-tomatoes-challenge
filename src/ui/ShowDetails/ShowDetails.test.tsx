import { render, screen } from "@testing-library/react";
import { ShowDetails } from "./ShowDetails";
import { ShowDetailsMovie } from '../types'


describe("Details", () => {
  const detailsOfMovie: ShowDetailsMovie = {
    title: "Avengers",
    releaseYear: 2003,
    description: "Some description of the movie",
  };

  test("should render hidden details:", () => {
    render(<ShowDetails {...detailsOfMovie} />);

    const titleElement = screen.getByText(detailsOfMovie.title);
    const releaseYearElement = screen.getByText(detailsOfMovie.releaseYear.toString());
    const descriptionElement = screen.getByText(detailsOfMovie.description);

    expect(titleElement).toBeInTheDocument();
    expect(releaseYearElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
