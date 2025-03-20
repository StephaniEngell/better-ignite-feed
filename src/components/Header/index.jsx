import styles from "./Header.module.css";

import igniteLogo from "../../assets/Ignite.svg";

export const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="logo" />
      </header>
    </div>
  );
};
