import React, { useState } from "react";
import fullStar from "../images/full-star.png";

function ReviewForm({addReview}) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [star, setStar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      name: name,
      reviewText: notes,
      stars: star,
    }
    
    if(star == "" || name ==="" || notes == ""){
      alert("All fields must be full to leave a review!");
    } else {
      console.log(review, "from handle submit");
      addReview(review); // add the review using the addReview prop
      setName(''); // clear the form
      setNotes('');
      setStar(''); // clear the form
    }

  };

  return (
    <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Name:"
        className="review-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <select name="" id="" value={star} onChange={(e) => setStar(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <textarea
        placeholder="Review Notes:"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
