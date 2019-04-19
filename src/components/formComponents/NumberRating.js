import React from 'react';
import '../css/NumberRating.css';
import '../css/utilities.css';

const NumberRating = (props) => {

  return (
    <div>
      <div className="u-padding-top-bottom-10">{props.label}</div>
      <div className="ratings">
        <div className="ratingButton">1</div>
        <div className="ratingButton">2</div>
        <div className="ratingButton">3</div>
        <div className="ratingButton">4</div>
        <div className="ratingButton">5</div>
      </div>
    </div>
  );
}

export default NumberRating;

