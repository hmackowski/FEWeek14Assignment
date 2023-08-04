import React, { useState } from "react";
import fullStar from "../images/full-star.png"; // Image for a full star (filled)
import emptyStar from "../images/empty-star.png"; // Image for an empty star (unfilled)

function ReviewForm({ addReview }) {
  // State to manage form input values
  const [name, setName] = useState(""); // Reviewer's name
  const [notes, setNotes] = useState(""); // Review notes
  const [star, setStar] = useState(""); // Selected star rating
  const [hoverStar, setHoverStar] = useState(0); // Star rating hovered by the mouse

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a review object with form input values
    const review = {
      name: name,
      reviewText: notes,
      stars: star,
    };

    // Check if all fields are filled before submitting the review
    if (star === "" || name === "" || notes === "") {
      alert("All fields must be filled to leave a review!");
    } else {
      console.log(review, "from handle submit");
      addReview(review); // Add the review using the addReview prop
      setName(""); // Clear the form
      setNotes("");
      setStar(""); // Clear the form
    }
  };

  // Function to generate star rating elements (buttons with star images)
  const generateStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={`button-${i}`} // Assign a unique key to each button for React's internal optimization
          className={`button-${i}`} // Assign a CSS class for targeting individual star buttons if needed
          id={"star-Buttons"} // Set an ID for the star buttons if needed
          type="button" // Set the type to button
          onClick={() => setStar(i)} // Set the star rating when a button is clicked
          onMouseEnter={() => {
            setHoverStar(i); // Set the hovered star when the mouse enters a button
          }}
          onMouseLeave={() => {
            setHoverStar(0); // Clear the hovered star when the mouse leaves a button
          }}
        >
          {/* Star image displayed based on hover and selected state */}
          <img
            className={`star-${i}`} // Assign a CSS class for targeting individual stars if needed
            src={hoverStar >= i || star >= i ? fullStar : emptyStar} // Use fullStar image if the star is hovered or selected, otherwise use emptyStar
            alt="" // Alt attribute for accessibility (left empty as it's decorative)
          />
        </button>
      );
    }

    return stars;
  };

  // Generate the star elements based on the current state
  const starElements = generateStars();

  return (
    // Review form container
    <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
      <p>Love it? Hate it? Leave a Review:</p>
      {/* Input field for the reviewer's name */}
      <input
        type="text"
        placeholder="Name:"
        className="review-name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update the name state on input change
      />
      <br />
      {/* Star rating section */}
      <div className="star-rating">{starElements}</div>
      {/* Textarea for review notes */}
      <textarea
        placeholder="Review Notes:"
        value={notes}
        onChange={(e) => setNotes(e.target.value)} // Update the notes state on input change
      />
      {/* Submit button */}
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
