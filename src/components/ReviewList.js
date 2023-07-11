import React from 'react';
import Review from './Review';

function ReviewList(props) {
  return (
    <div className='review-container'>
      {(props.reviews || []).map((review, index) => (
        review && <Review key={index} review={review} stars={props.stars} />
      ))}
    </div>
  );
}

export default ReviewList;
