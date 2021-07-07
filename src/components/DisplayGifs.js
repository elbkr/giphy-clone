import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../service/getGifs";
import "../styles/Gif.css";

export default function DisplayGifs({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState({ loading: false, results: [] });

  useEffect(
    function () {
      setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }));
      getGifs({ keyword }).then((gifs) => setGifs({loading: false, results: gifs}));
    },
    [keyword]
  );
  if (gifs.loading) return <i>loading...</i>;

  return gifs.results.map(({ id, title, url }) => (
    <Gif key={id} title={title} id={id} url={url} />
  ));
}
