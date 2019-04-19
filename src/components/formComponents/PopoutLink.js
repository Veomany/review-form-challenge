import React from 'react';
import '../css/PopoutLink.css';

const PopoutLink = (props) => {
  return (
    <div>
      <a 
        className="popout-link-decoration "
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.text}
        <i className={`u-padding-left-5 ${props.icon}`}></i>
      </a>
    </div>
  );
}

export default PopoutLink;