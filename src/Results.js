import React from "react";
import Movies from "./Movies";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        {props.results &&
          props.results.map((movie) => (
            <Movies
              key={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              image={movie.poster_path}
              overview={movie.overview}
            />
          ))}
      </div>
    );
  } else {
    return null;
  }
}
