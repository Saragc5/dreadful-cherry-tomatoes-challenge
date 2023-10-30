import { ReactNode } from "react";

export interface ShowDetailsMovie {
  title: string;
  releaseYear: number;
  description: string;
}

export interface MoviesInfo {
  images: string;
  title: string;
  releaseYear: number;
  description: string;
}

export interface Movie {
  images?: {
    posterArt: {
      url: string;
    };
  };
  title: string;
  releaseYear: number;
  description: string;
}

export interface PaginationProps {
  totalMovies: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  lastMovieIndex: number;
  lastPage: number;
  
}

export interface SearchBarProps {
  search:string;
  handleSearch:(e: React.ChangeEvent<HTMLInputElement>) => void
}

// Interface for the context:
export interface GlobalContext {
  movieData: Movie[],
  search: Exclude<string, boolean>,
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
  filteredMovie: Movie[],
  currentPage: number,
  lastPage:number,
  lastMovieIndex: number,
  firstMovieIndex: number,
  handlePageChange: (page: number) => void,
  searchedMovie: Movie[]

}
export type AppProviderProps = {
  children: ReactNode;
}