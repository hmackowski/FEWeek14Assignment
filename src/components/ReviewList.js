import React from "react";
import Review from "./Review";

function ReviewList(props) {
  return (
    // Container for the list of reviews
    <div className="review-container">
      {/* Loop through each review in the reviews array and render the Review component */}
      {props.reviews.map(
        (review, index) =>
          // Check if the review exists (not null or undefined) before rendering
          review && <Review key={index} review={review} stars={props.stars} />
      )}
    </div>
  );
}

export default ReviewList;
