import React from 'react';
import '../css/FormCard.css';
import '../css/utilities.css';

const FormCard = (props) => {
  return (
    <div className="card-template u-padding-20">
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default FormCard;