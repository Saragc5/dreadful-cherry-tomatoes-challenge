import styles from './Searchbar.module.css';
import iconSearch from "./search.svg";
import { SearchBarProps } from '../types';


export const Searchbar: React.FC<SearchBarProps> = ({
  search,
  handleSearch
}) => {

 

  return (
    <div className={styles.inputContainer}>
          <img src={iconSearch} className={styles.icon} alt="icon search"/>
          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="Title"
            className={styles.input}
          />
        </div>
  )
}
