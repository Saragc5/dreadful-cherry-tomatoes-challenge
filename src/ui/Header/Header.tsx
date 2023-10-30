import logo from "./deadful-cherry-tomatoes.svg";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <span id="logoSpan">
        <img
          className={styles.logo}
          src={logo}
          alt="Dreadful Cherry Tomatoes logo"
        />
      </span>
    </header>
  );
};
