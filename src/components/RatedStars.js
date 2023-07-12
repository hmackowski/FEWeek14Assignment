import React from "react";
import fullStar from "../images/full-star.png";
import emptyStar from "../images/empty-star.png";

function RatedStars(props) {
  let starRating = props.stars;
  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        style={{ height: "25px" }}
        className={`star-${i + 1}`}
        src={i < starRating ? fullStar : emptyStar}
        alt=""
      />
    );
  }
  return <div>{stars}</div>;
}
export default RatedStars;
