import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "../App.css";

const Main = ({ movieList }) => {
  return (
    <div className="main_body">
      {movieList?.map((movie) => (
        <div className="movie_card">
          <img src={movie.Poster} alt="poster" />
          <h3>{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Main;
