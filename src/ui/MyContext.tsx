import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Movie, GlobalContext, AppProviderProps } from './types';
import { SEARCH_URL } from "./settings";

//Context:
export const AppContext = createContext<GlobalContext>({
  movieData: [],
  search: "",
  handleSearch: () => {},
  filteredMovie: [],
  currentPage: 0,
  lastPage:0,
  lastMovieIndex: 0,
  firstMovieIndex: 0,
  handlePageChange: () => {},
  searchedMovie:[]
});
//Hook for using the context:
export const useAppContext = () => {
  const context = useContext<GlobalContext>(AppContext);
  if (!context) {
    throw new Error("useAppContext debe utilizarse dentro de un AppProvider");
  }
  return context;
};

//Function to provide context:
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>("");
  const [encodedSearchTerm, setEncodedSearchTerm] = useState<string>("");

 
   //FETCH to receive movies
   const fetchDataMovies = async () => {
    try {
      const response = await fetch(SEARCH_URL);
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
  
      const resultado = await response.json();
      setMovieData(resultado.entries);
      
    } catch (error) {
      console.error("Se produjo un error durante la solicitud:", error);
    }
  };
  useEffect(() => {
    fetchDataMovies();
  }, []); 
  //Function to manage the pages with the filter:
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // FETCH BASED ON SEARCH and update movieData
  // Update 'encodedSearchTerm'
  useEffect(() => {
    setEncodedSearchTerm(encodeURIComponent(search));
  }, [search]);

  const fetchSearchedMovie = async () => {
    try {
      const response = await fetch(SEARCH_URL + encodedSearchTerm);
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      const resultado = await response.json();
      setMovieData(resultado.entries);
    } catch (error) {
      console.error("Se produjo un error durante la solicitud:", error);
    }
  };
  useEffect(() => {
    fetchSearchedMovie();
  }, [encodedSearchTerm]); 

  

  //SEARCH function for the searchbar:
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  // FILTER method:
  const filteredMovie = movieData.filter((item) => {
    return (
      item.hasOwnProperty("title") &&
      typeof item.title === "string" &&
      item.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
  });
  const searchedMovie = !search ? movieData : filteredMovie;

  //MOVIES PAGINATION:
  const [totalMovies, setTotalMovies] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesPerPage] = useState<number>(10);
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const lastPage = Math.ceil(totalMovies / moviesPerPage);

  //UseEffect for setting the total movies per page:
  useEffect(() => {
    setTotalMovies(movieData.length);
  }, [movieData]);
   

  return (
    <AppContext.Provider 
    value={{
      movieData,
      search,        
      handleSearch,      
      filteredMovie,      
      currentPage,
      lastPage,
      lastMovieIndex,   
      firstMovieIndex,
      handlePageChange,
      searchedMovie
       
    }}
    >{children}</AppContext.Provider>
  );
};
