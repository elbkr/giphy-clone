import React from "react";
import "../styles/App.css";
import { Link, Route } from "wouter";

import DisplayGifs from "./DisplayGifs";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>gifs</h1>
        <Link to="/gif/ayman">Ayman</Link>
        <Link to="/gif/mapache">Mapache</Link>
        <Link to="/gif/dog">Dog</Link>
        <Route component={DisplayGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}
