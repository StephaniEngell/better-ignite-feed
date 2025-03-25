import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/111245491?v=4"
          />
        </div>

        <div className={styles.authorInfo}></div>
      </header>
    </article>
  );
}
