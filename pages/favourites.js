import Head from "next/head";
import { useEffect, useState } from "react";
import Post from "../components/Post";

const favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("/api/favourites")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.favourites);
        setFavourites(data.favourites);
      });
  }, []);

  return (
    <div>
      <section>
        {favourites.map((favourite) => (
          <Post
            key={favourite._id}
            username={favourite.username}
            image={favourite.image}
            description={favourite.description}
            id={favourite._id}
          />
        ))}
      </section>
    </div>
  );
};

export default favourites;
