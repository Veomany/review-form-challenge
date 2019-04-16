import React from 'react';
import '../css/utilities.css';

const TwoButtons = (props) => {
  return (
    <div>
      <form className="ui form">
        <label className="u-padding-top-bottom-10 u-display-block">
          {props.label}
        </label>
        <div className="ui two buttons">
          <div className="ui button">YES</div>
          <div className="ui button">NO</div>
        </div>
      </form>
    </div>
  );
}

export default TwoButtons;