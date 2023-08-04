import React from "react";
import fullStar from "../images/full-star.png"; // Image for a full star (filled)
import emptyStar from "../images/empty-star.png"; // Image for an empty star (unfilled)

function ReviewStars() {
  // State to manage the star currently being hovered and the star that is clicked
  const [hoverStar, setHoverStar] = React.useState(0); // Star currently hovered by the mouse
  const [clickedStar, setClickedStar] = React.useState(0); // Star that is clicked by the user

  // Function to generate star rating elements (buttons with star images)
  const generateStars = () => {
    let count = 0; // Variable to hold the star rating count
    const stars = []; // Array to store the JSX elements for stars

    for (let i = 1; i <= 5; i++) {
      stars.push(
        // JSX for a single star button
        <button
          key={`button-${i}`} // Assign a unique key to each button for React's internal optimization
          className={`button-${i}`} // Assign a CSS class for targeting individual star buttons if needed
          id={"star-Buttons"} // Set an ID for the star buttons if needed
          onClick={() => {
            setClickedStar(i); // Set the star rating when a button is clicked
            count = i; // Update the count variable with the clicked star rating
            {
              console.log(count); // Log the clicked star rating to the console
            }
          }}
          onMouseEnter={() => {
            setHoverStar(i); // Set the hovered star when the mouse enters a button
            // console.log(`Mouse entered star ${i}`);
          }}
          onMouseLeave={() => {
            setHoverStar(0); // Clear the hovered star when the mouse leaves a button
            // console.log(`Mouse left star ${i}`);
          }}
        >
          {/* Star image displayed based on hover and clicked state */}
          <img
            className={`star-${i}`} // Assign a CSS class for targeting individual stars if needed
            src={hoverStar >= i || clickedStar >= i ? fullStar : emptyStar} // Use fullStar image if the star is hovered or clicked, otherwise use emptyStar
            alt="" // Alt attribute for accessibility (left empty as it's decorative)
          />
        </button>
      );
    }
    return stars;
  };

  // Generate the star elements based on the current state
  return <div className="review-stars">{generateStars()}</div>;
}

export default ReviewStars;
