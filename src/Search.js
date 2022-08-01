import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.results[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiKey = "a6bf3f512c1cea4ef45df7c7029ebf76";
    let apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=1&query=${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="searchContainer">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Search a title"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
