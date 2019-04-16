import React from 'react';
import '../css/utilities.css';

const FieldInput = (props) => {
  return (
    <div>
      <form className="ui form">
        <label className="u-padding-top-bottom-10 u-display-block">
          {props.label}
        </label>
        <input type={props.inputType}/>
      </form>
    </div>
  );
}

export default FieldInput;