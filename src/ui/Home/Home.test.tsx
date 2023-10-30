import { render, screen  } from "@testing-library/react";
import { Home } from "./Home";

test("renders movie data", () => {
    render(<Home />);

  // Check that the elements related to the movie listing are on the page:  
  const movieElements = screen.queryAllByTestId("movie-card");
  expect(movieElements).toBeTruthy();
});



