import { React, useState } from "react";
import Main from "./Main";
import axios from "axios";
import Search from "./Search";
import "../App.css";

function Home() {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);

  const myUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=56d431fd";

  const FetchMovie = () => {
    async function getData() {
      const res = await axios.get(myUrl + "&s=" + search);
      console.log(res.data.Search);
      setMovieList(res.data.Search);
    }
    getData();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    FetchMovie();
  };

  return (
    <div>
      <h1>Movie Database</h1>
      <Search setSearch={setSearch} handleSubmit={handleSubmit} />
      <Main movieList={movieList} keyId={movieList.imdbID} />
    </div>
  );
}

export default Home;
