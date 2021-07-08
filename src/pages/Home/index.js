import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Food", "Rick", "Morty", "Racoon"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // go to other route
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <button>Buscar</button>
      </form>
      <h3 className="App-title">Last search</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Popular gifs</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>{popularGif} gifs</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
