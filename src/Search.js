import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    // console.log(response.data.results[0].original_title);
    // console.log(response.data.results[0].overview);
    // console.log(response.data.results[0].poster_path);
    console.log(response.data.results);

    setResults(response.data.results);
  }

  function search(event) {
    event.preventDefault();
    // alert(`Searching for ${keyword}`);

    let apiKey = "a6bf3f512c1cea4ef45df7c7029ebf76";
    let apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=1&query=${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="searchContainer">
      <form>
        <input
          type="search"
          autoFocus={true}
          placeholder="Search a title"
          onChange={handleKeywordChange}
        />
        <button onClick={search}>Search</button>
      </form>
      <Results results={results} key={results.id} />
    </div>
  );
}
