import React from 'react';
import '../css/utilities.css';

const StarRating = (props) => {
  return (
    <div>
      <form className="ui form">
        <label className="u-padding-top-bottom-10 u-display-block">
          {props.label}
        </label>
        <div 
          className="ui star rating"
          data-rating="3"
          data-max-rating="5"
          >
          This is suppose to have stars
          </div>
      </form>
    </div>
  );
}

export default StarRating;