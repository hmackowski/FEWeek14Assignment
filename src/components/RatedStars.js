import React from "react";
import fullStar from "../images/full-star.png"; // Image for a full star (filled)
import emptyStar from "../images/empty-star.png"; // Image for an empty star (unfilled)

function RatedStars(props) {
  // Extract the star rating value from the props
  let starRating = props.stars;
  // Initialize an array to store the JSX elements for stars
  let stars = [];

  // Loop to create 5 stars (full or empty) based on the starRating value
  for (let i = 0; i < 5; i++) {
    stars.push(
      // JSX for a single star image (full or empty)
      <img
        key={i} // Assign a unique key to each star for React's internal optimization
        style={{ height: "25px" }} // Set the height of the star image
        className={`star-${i + 1}`} // Assign a CSS class for targeting individual stars if needed
        src={i < starRating ? fullStar : emptyStar} // Use fullStar image if the index is less than starRating, otherwise use emptyStar
        alt="" // Alt attribute for accessibility (left empty as it's decorative)
      />
    );
  }
  // Return the array of star JSX elements wrapped in a div container
  return <div>{stars}</div>;
}

export default RatedStars;
