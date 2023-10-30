import styles from "./Home.module.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { Pagination } from "../Pagination/Pagination";
import { Searchbar } from '../SearchBar/Searchbar';
import { useAppContext } from "../MyContext";



export const Home: React.FC = () => {
  const {
    movieData,
    search,
    handleSearch,
    filteredMovie,
    currentPage,
    lastPage,
    lastMovieIndex,
    firstMovieIndex,
    handlePageChange  ,
    searchedMovie  
  } = useAppContext();
 
  return (    
      <div className={styles.home}>       
        <Searchbar 
        search={search}
        handleSearch={handleSearch}/>
        <h3>Popular movies</h3>
        <div className={styles.movies} role="movies-display">
          {searchedMovie && 
          searchedMovie
          .map(({ images, title, releaseYear, description }) => {
              const posterUrl: string =
                images?.posterArt?.url ?? "./imagen-no-disponible.jpg";

              return {
                images: posterUrl,
                title,
                description,
                releaseYear,
              };
            })
            .sort(
              (movieA, movieB) =>
                new Date(movieB.releaseYear).getTime() -
                new Date(movieA.releaseYear).getTime()
            )
            .map(({ images, title, description, releaseYear }) => (
              <MoviesCard
                key={title}
                images={images}
                title={title}
                description={description}
                releaseYear={releaseYear}
              />
            ))
            .slice(firstMovieIndex, lastMovieIndex)}
        </div>
        <>
          <Pagination
            totalMovies={movieData.length}
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
            lastPage={lastPage}
            lastMovieIndex={lastMovieIndex}
          />
        </>
      </div>
    
  );
};
