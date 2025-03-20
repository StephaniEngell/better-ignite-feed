import { Post } from "./Post";
import "./global.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Post
        author="Stephani Engel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur quisquam dicta, officiis reiciendis, tempora magnam at laboriosam autem nulla error fugit exercitationem ducimus rem. Amet exercitationem neque veniam sequi."
      />

      <Post
        author="Graziele Nanni"
        content="Lorem ipsum dolor sit amet consectetur."
      />
    </>
  );
}

export default App;
