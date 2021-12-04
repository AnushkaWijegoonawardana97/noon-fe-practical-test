import Head from "next/head";
import { useEffect, useState } from "react";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/api/post")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.posts);
        setPosts(data.posts);
      });
  }, []);

  return (
    <div>
      <section className='main-container'>
        {posts.map((post) => (
          <Post
            key={post._id}
            username={post.username}
            image={post.image}
            description={post.description}
            id={post._id}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
