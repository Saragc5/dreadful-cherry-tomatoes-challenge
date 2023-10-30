import styles from "./ShowDetails.module.css";
import { ShowDetailsMovie } from "../types";

export const ShowDetails: React.FC<ShowDetailsMovie> = ({
  title,
  releaseYear,
  description,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.text}>{title}</h3>
      <h3 className={styles.text}>{releaseYear}</h3>
      <h3 className={styles.textDescription}>{description}</h3>
    </div>
  );
};
