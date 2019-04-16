import React from 'react';
import '../css/utilities.css';

const FieldTextArea = (props) => {
  return (
    <div>
      <form className="ui form">
        <label className="u-padding-top-bottom-10 u-display-block">
          {props.label}
        </label>
        <textarea />
      </form>
    </div>
  );
}

export default FieldTextArea;