import { ShowDetails } from "../ShowDetails/ShowDetails";
import styles from "./MoviesCard.module.css";
import { MoviesInfo } from "../types";

export const MoviesCard: React.FC<MoviesInfo> = ({
  images,
  title,
  releaseYear,
  description,
}) => {
  return (
    <div className={styles.container}>
      <img src={images} className={styles.image} alt="Image from movie" />
      <h2 className={styles.title} role="heading">
        {title}
      </h2>
      <div className={styles.descriptionHidden}>
        <ShowDetails
          title={title}
          releaseYear={releaseYear}
          description={description}
        />
      </div>
    </div>
  );
};
