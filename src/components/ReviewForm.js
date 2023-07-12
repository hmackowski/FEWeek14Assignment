import React, { useState } from "react";
import fullStar from "../images/full-star.png";
import emptyStar from "../images/empty-star.png";

function ReviewForm({ addReview }) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [star, setStar] = useState("");
  const [hoverStar, setHoverStar] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      name: name,
      reviewText: notes,
      stars: star,
    };

    if (star === "" || name === "" || notes === "") {
      alert("All fields must be filled to leave a review!");
    } else {
      console.log(review, "from handle submit");
      addReview(review); // add the review using the addReview prop
      setName(""); // clear the form
      setNotes("");
      setStar(""); // clear the form
    }
  };

  const generateStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={`button-${i}`}
          className={`button-${i}`}
          id={"star-Buttons"}
          type="button" // Set the type to button
          onClick={() => setStar(i)}
          onMouseEnter={() => {
            setHoverStar(i);
          }}
          onMouseLeave={() => {
            setHoverStar(0);
          }}
        >
          <img
            className={`star-${i}`}
            src={hoverStar >= i || star >= i ? fullStar : emptyStar}
            alt=""
          />
        </button>
      );
    }

    return stars;
  };

  const starElements = generateStars();

  return (
    <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
      <p>Love it? Hate it? Leave a Review:</p>
      <input
        type="text"
        placeholder="Name:"
        className="review-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <div className="star-rating">{starElements}</div>
      <textarea
        placeholder="Review Notes:"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
