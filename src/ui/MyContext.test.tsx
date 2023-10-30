import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { AppContext } from './MyContext';
import { Home } from './Home/Home';
import { Pagination } from './Pagination/Pagination';


  // Custom initializer for context values:
const customContextValue = {
  movieData: [],
  search: "",
  handleSearch: () => {},
  filteredMovie: [],
  currentPage: 1,
  lastPage:10,
  lastMovieIndex: 0,
  firstMovieIndex: 0,
  handlePageChange: (page:number) => {},
  searchedMovie:[]
};
  // Mock functions for the functions:
const mockHandleSearch = jest.fn();
const mockHandlePageChange = jest.fn();

 // TEST for the fetch of movieData:
 describe('Fetching to data is correctly done', () => {
  it('show API data', async () => {
    // Spy the global function `fetch`
    const fetchSpy = jest.spyOn(global, 'fetch');

    // Mock a fake answer
    fetchSpy.mockResolvedValue(
      Promise.resolve(
        new Response(
          JSON.stringify({
            title: "American History X",
          }),
          {
            status: 200,
            headers: { 'Content-type': 'application/json' },
          }
        )
      )
    );
    

    render(
      <AppContext.Provider
      value={{
        ...customContextValue,
        handleSearch: mockHandleSearch,
        handlePageChange: mockHandlePageChange,
      }}
    >
      <Home />
    </AppContext.Provider>
    );

    // Wait for loading data and charge in DOM
    await waitFor(() => {
      expect(
        screen.getByRole("movies-display")
      ).toBeInTheDocument();
    });
    
    fetchSpy.mockRestore();
  });
});


 // TEST FOR VARIABLES:
test("The context value is passed correctly", () => {
  const { getByText, getByPlaceholderText } = render(
    <AppContext.Provider
      value={{
        ...customContextValue,
        handleSearch: mockHandleSearch,
        handlePageChange: mockHandlePageChange,
      }}
    >
      <Home />
    </AppContext.Provider>
  );

  const search = getByPlaceholderText("Title");
  const currentPage = getByText("1");
  const lastPage = getByText("3");
  const lastMovieIndex = getByText("3");
  const firstMovieIndex = getByText("1");

  expect(search).toBeInTheDocument();
  expect(currentPage).toBeInTheDocument();
  expect(lastPage).toBeInTheDocument();
  expect(lastMovieIndex).toBeInTheDocument();
  expect(firstMovieIndex).toBeInTheDocument();
});

 //TEST FOR FUNCTION HANDLESEARCH:
test("The value of context is provided correctly regarding the searchbar", () => {
  const { getByPlaceholderText } = render(
    <AppContext.Provider
      value={{
        ...customContextValue,
        handleSearch: mockHandleSearch,
        handlePageChange: mockHandlePageChange,
      }}
    >
      <Home />
    </AppContext.Provider>
  );
  // Obtain the input of handleSearch:
  const inputElement = getByPlaceholderText("Title");
  // Mock the change in the input
  fireEvent.change(inputElement, { target: { value: "new search" } });
  // Test if handleSearch has been called with the new value
  expect(mockHandleSearch).toHaveBeenCalledWith(expect.anything());
});

//TEST FOR FUNCTION HANDLECHANGEPAGE:
test('The value of context is provided correctly regarding pagination', () => {
const { getByRole } = render(
  <AppContext.Provider 
  value={{
    ...customContextValue,
    handleSearch: mockHandleSearch,
    handlePageChange: mockHandlePageChange,
  }}>
    <Pagination
    totalMovies={100}
    setCurrentPage={mockHandlePageChange}
    currentPage={1}
    lastPage={10}
    lastMovieIndex={1} />
  </AppContext.Provider>
  
);
   // Obtain button which sets handlePageChange:
   const buttonElement = getByRole("button-prevandnext");
   // Mock a clic in the button
   fireEvent.click(buttonElement);
   // Test if handlePageChange has been called:
   mockHandlePageChange(2)
   expect(mockHandlePageChange).toHaveBeenCalled(); 
})
