import React from "react";
import RatedStars from "./RatedStars";

function Review(props) {
  // Extract the review object from the props
  const { review } = props;

  return (
    // Container for an individual review
    <div className="review-post">
      {/* Reviewer's Name */}
      <h3 className="reviewer-header">{review.name}</h3>
      {/* Rated Stars Component to display the review's star rating */}
      rated: <RatedStars stars={review.stars} />
      <br />
      {/* Textarea to display the review's content (read-only) */}
      <textarea
        style={{ maxWidth: "167px" }} // Limit the width of the textarea to a specific value
        defaultValue={review.reviewText} // Set the default value to the review's content (read-only)
        readOnly // Make the textarea read-only so that users can't edit the review
      ></textarea>
    </div>
  );
}

export default Review;
