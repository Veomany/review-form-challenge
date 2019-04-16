import React from 'react';
import '../css/utilities.css';

const OneButton = (props) => {
  return (
    <div>
      <form className="ui form">
        <label className="u-padding-top-bottom-10 u-display-block u-align-text-center">
          {props.label}
        </label>
        <div className="ui teal button u-display-block">
          {props.text}
        </div>
      </form>
    </div>
  );
}

export default OneButton;