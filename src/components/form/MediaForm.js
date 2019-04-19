import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleButton from '../formComponents/SingleButton';
import '../css/MediaForm.css';
import '../css/NextButton.css';

class MediaForm extends Component {
  render() {
    return(
      <div className="media form-position">
        <div className="ui vertical menu">
          <div className="item">
            <i className="video icon">
              <span className="icon-font">Add a video review</span>
            </i>
          </div>
          <div className="item item-task">
            <i className="circle icon">
              <span className="icon-font">Record a new video</span>
            </i>         
          </div>
          <div className="item item-task">
            <i className="upload icon">
              <span className="icon-font">Record a new video</span>
            </i>
          </div>
        </div>

        <div className="ui vertical menu">
          <div className="item">
            <i className="camera icon">
              <span className="icon-font">Add photos</span>
            </i>
          </div>
          <div className="item item-task">
            <i className="upload icon">
              <span className="icon-font">Upload photos</span>
            </i>         
          </div>
        </div>

        <Link to="/confirm">
          <SingleButton
            className="ui container
              ui button 
              color-teal              
              u-display-block 
              u-button-height-70 
              u-align-center-container"
            text="Skip"
          />
        </Link>

      </div>

    );
  }
}

export default MediaForm;