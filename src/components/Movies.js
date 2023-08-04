import React from "react";
import ReviewForm from "./ReviewForm";
// import ReviewStars from "./ReviewStars"; // Commented out because ReviewStars component is not currently used

function Movies({ movie, addReview }) {
  return (
    // Movie Card Container
    <div className="movie-card">
      {/* Movie Image and Synopsis */}
      <div className="image-container">
        <img src={movie.image} alt={movie.name} />
        {/* Hover text displays the movie's synopsis */}
        <div className="hover-text">{movie.synopsis}</div>
      </div>
      {/* Movie Name */}
      <h2 className="movie-name">{movie.name}</h2>
      {/* Movie Rating Stars (If ReviewStars component is used) */}
      {/* <ReviewStars /> */}
      {/* Movie Actor */}
      <p>Starring:</p>
      <h3 className="movie-actor">{movie.actor}</h3>
      {/* Review Form to add a new review */}
      <ReviewForm addReview={(review) => addReview(review)} />
    </div>
  );
}

export default Movies;
