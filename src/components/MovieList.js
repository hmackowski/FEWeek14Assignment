import React, { useState } from "react";
import Movies from "./Movies";
import ReviewList from "./ReviewList";
// Import images for movie posters
import aliensImage from "../images/aliens.jpg";
import batmanImage from "../images/batman.jpg";
// ... (Other image imports)

function MovieList() {
  // State to hold the list of movies and their reviews
  const [movies, setMovies] = useState([
    // Array of movie objects with their details and initial empty reviews
    // Each movie has an ID, name, actor, image, synopsis, and reviews array
  ]);

  // Function to add a review for a movie
  const addReview = (movieIndex, review) => {
    setMovies((prevMovies) => {
      // Create a copy of the movies array to avoid direct mutation
      const newMovies = [...prevMovies];
      // Push the new review to the reviews array of the specified movie
      newMovies[movieIndex].reviews.push(review);
      return newMovies;
    });
  };

  return (
    <div className="movie-container">
      {/* Loop through the movies and render the Movies and ReviewList components */}
      {movies.map((movie, index) => (
        <div key={index}>
          {/* Pass movie details and review-related functions to Movies component */}
          <Movies
            movie={movie}
            movieIndex={index}
            reviews={movie.reviews}
            addReview={(review) => addReview(index, review)}
          />
          {/* Render the list of reviews for each movie */}
          <ReviewList reviews={movie.reviews} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
