import React from "react";
import RatedStars from "./RatedStars";

function Review(props) {
  const { review } = props;


  return (
    <div className="review-post">
      <h3 className="reviewer-header">
        {review.name}: {review.stars}
      </h3>
      <RatedStars stars={review.stars} />
      <br />
      <textarea
        style={{ maxWidth: "167px" }}
        defaultValue={review.reviewText}
        readOnly
      ></textarea>
    </div>
  );
}

export default Review;
