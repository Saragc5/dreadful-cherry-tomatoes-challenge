import styles from "./Footer.module.css";
import logo from "./deadful-cherry-tomatoes.svg";
import appStore from "./app-store.svg";
import googlePlay from "./google-play.svg";

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.containerLogo}>
        <div className={styles.backgroundColor}>
          <img
            className={styles.logo}
            src={logo}
            alt="Dreadful Cherry Tomatoes logo"
          />
        </div>
      </span>

      <div className={styles.storesContainer}>
        <img className={styles.appStore} src={appStore} alt="App Store logo" />
        <img
          className={styles.googlePlay}
          src={googlePlay}
          alt="Google Play logo"
        />
      </div>
      <span title="Copyright" className={styles.copyright}>
        &copy; Copyright 2022 Dreadful Tomatoes. All rights reserved.
      </span>
    </div>
  );
};
