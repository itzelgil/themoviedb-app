import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import AppPagination from "./Pagination/AppPagination";
import { Pagination } from "@mui/material";

export default function Search(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    // console.log(response.data.results[0].original_title);
    // console.log(response.data.results[0].overview);
    // console.log(response.data.results[0].poster_path);
    // console.log(response.data.results);

    setResults(response.data.results);
  }

  function search(event) {
    event.preventDefault();
    // alert(`Searching for ${keyword}`);
    let currentPage = "1";
    let apiKey = "a6bf3f512c1cea4ef45df7c7029ebf76";
    let apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=${currentPage}&query=${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  // function nextPage(event) {
  //   event.preventDefault();
  //   let currentPage = 1;
  //   let page = currentPage++;
  //   let apiKey = "a6bf3f512c1cea4ef45df7c7029ebf76";
  //   let apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&page=${page}&query=${keyword}`;
  //   axios.get(apiUrl).then(handleResponse);
  // }

  return (
    <div className="searchContainer">
      <input
        type="search"
        autoFocus={true}
        placeholder="Search a title"
        onChange={handleKeywordChange}
      />
      <button onClick={search}>Search</button>

      <Results results={results} key={results.id} />

      <Pagination
        style={{ display: "flex", justifyContent: "center" }}
        count={10}
        color="secondary"
      />
    </div>
  );
}
