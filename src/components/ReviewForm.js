import React, { useState } from "react";

function ReviewForm({addReview}) {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      name: name,
      notes: notes,
    }
    console.log(review);
    addReview(review); // add the review using the addReview prop
    setName(''); // clear the form
    setNotes(''); // clear the form
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

      <textarea
        placeholder="Review Notes:"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
