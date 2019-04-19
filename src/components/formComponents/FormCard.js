import React from 'react';
import '../css/FormCard.css';
import '../css/utilities.css';

const FormCard = (props) => {
  return (
    <div className="card-template u-padding-left-right-20 ">
      <div className="u-padding-top-bottom-10">
        {props.children}
      </div>
    </div>
  );
}

export default FormCard;