import { PaginationProps } from "../types";
import styles from "./Pagination.module.css";
import iconleft from "./left-chevron.svg";
import iconright from "./right-chevron.svg";

export const Pagination: React.FC<PaginationProps> = ({
  totalMovies,
  currentPage,
  setCurrentPage,
  lastMovieIndex,
  lastPage,
}): JSX.Element => {
  
  const pagesNumber: number[] = [];

  for (let i = 1; i <= lastPage; i++) {
    pagesNumber.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <nav className={styles.containerButtonsPage}>
      <button
        role="button-prevandnext"
        className={styles.buttonPrevAndNext}
        onClick={onPreviousPage}
        disabled={currentPage === 1 ? true : false}
      >
        <img
          src={iconleft}
          alt="icon left side"
          className={styles.iconsArrow}
        />
      </button>
      <ul className={styles.buttonPageContainer}>
        {pagesNumber.map((page, index) => (
          <button
            role="button-pageNumber"
            key={index}
            className={page === currentPage ? styles.active : styles.buttonPage}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </ul>

      <button
        className={styles.buttonPrevAndNext}
        onClick={onNextPage}
        disabled={
          currentPage === lastPage || lastMovieIndex >= totalMovies
            ? true
            : false
        }
      >
        <img
          src={iconright}
          alt="icon right side"
          className={styles.iconsArrow}
        />
      </button>
    </nav>
  );
};
