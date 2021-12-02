import Head from "next/head";
import Post from "../components/Post";

const Home = () => {
  return (
    <div>
      <section>
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </div>
  );
};

export default Home;
