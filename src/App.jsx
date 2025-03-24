import { Post } from "./Post";
import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post
            author="Stephani Engel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur quisquam dicta, officiis reiciendis, tempora magnam at laboriosam autem nulla error fugit exercitationem ducimus rem. Amet exercitationem neque veniam sequi."
          />

          <Post
            author="Graziele Nanni"
            content="Lorem ipsum dolor sit amet consectetur."
          />
        </main>
      </div>
    </>
  );
}

export default App;
