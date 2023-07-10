import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewStars from "./ReviewStars"

function Movies({movie, addReview, movieIndex}) {
  return (
    <div className="movie-card">
      <div className="image-container">
        <img src={movie.image} alt={movie.name} />
        <div className="hover-text">{movie.synopsis}</div>
      </div>
      <h2 className="movie-name">{movie.name}</h2>
      <ReviewStars />
      <p>Starring:</p>
      <h3 className="movie-actor">{movie.actor}</h3>
      <ReviewForm addReview={(review) => addReview(movieIndex, review)}/>
    </div>
  );
}

export default Movies;
