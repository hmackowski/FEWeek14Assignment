import React from "react";
import fullStar from "../images/full-star.png";
import emptyStar from "../images/empty-star.png";

function ReviewStars() {
  const [hoverStar, setHoverStar] = React.useState(0);
  const [clickedStar, setClickedStar] = React.useState(0);

  const generateStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={`button-${i}`}
          className={`button-${i}`}
          id={'star-Buttons'}
          onClick={() => {
            setClickedStar(i);
          }}
          onMouseEnter={() => {
            setHoverStar(i);
            // console.log(`Mouse entered star ${i}`);
          }}
          onMouseLeave={() => {
            setHoverStar(0);
            // console.log(`Mouse left star ${i}`);
          }}
        >
          <img
            className={`star-${i}`}
            src={hoverStar >= i || clickedStar >= i ? fullStar : emptyStar}
            alt=""
          />
        </button>
      );
    }
    return stars;
  };

  return <div className="review-stars">{generateStars()}</div>;
}

export default ReviewStars;
