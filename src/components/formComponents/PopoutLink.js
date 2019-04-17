import React from 'react';

const PopoutLink = (props) => {
  return (
    <div>
      <a 
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.text}
        <i className={props.icon}></i>
      </a>
    </div>
  );
}

export default PopoutLink;