import React  from "react";
import "../styles/Gif.css";
export default function Gif({ id, title, url }) {
  return (
    <a href={`${id}`} className="Gif">
      <h4>{title}</h4>
      <img alt={id} src={url} />
    </a>
  );
}
