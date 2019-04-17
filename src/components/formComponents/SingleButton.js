import React from 'react';
import '../css/utilities.css';

const SingleButton = (props) => {
  return (
    <div>
      <div className={props.className}>
        {props.text}
      </div>
    </div>
  );
}

export default SingleButton;