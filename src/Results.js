import React from "react";
import Movies from "./Movies";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results[0].original_title}</h3>
        {props.results.}
        {/* {props.data.map(function (movies, index) {
          return (
            <div key={index}>
              <Movies movies={movies} />
            </div>
          );
        })} */}
      </div>
    );
  } else {
    return null;
  }
}
