import React from 'react';
import '../css/utilities.css';

const NumberRating = (props) => {
  return (
    <div>
      <div className="u-padding-top-bottom-10">{props.label}</div>
      <div>Put the number ratings here</div>
    </div>
  );
}

export default NumberRating;