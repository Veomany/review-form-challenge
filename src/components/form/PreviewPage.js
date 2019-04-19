import React from 'react';
import FormCard from '../formComponents/FormCard';
import SingleButton from '../formComponents/SingleButton';
import '../css/utilities.css';
import '../css/PreviewPage.css';
import '../css/NextButton.css';


const PreviewPage = () => (
  <div className="preview form-position">
    <FormCard className="u-padding-top-bottom-10">
      <div className="preview--heading u-padding-top-bottom-10">
        Preview your review
      </div>
      <div className="preview--subheading u-padding-bottom-10">
        You're almost done! Here is a preview of how your review will look.
      </div>
    
      <div className="preview--card container u-padding-top-bottom-10">
        <div className="preview--card left">
          <div className="preview--card profile">
            <div className="preview--picture u-align-center-container">K</div>
            <div className="u-padding-left-20">
              <span>K</span>
              <span className="u-padding-left-20">
                <i className="ui flag icon"></i>
              </span>
            </div>
          </div>

          <div className="u-padding-top-bottom-10">
            I recommend this product
          </div>
          <div className="u-padding-top-bottom-10">
            <div className="preview--title-heading">
              Age Range
            </div>
            <div className="preview--title-category">
              Under 18
            </div>
          </div>
          <div className="u-padding-top-bottom-10">
            <div className="preview--title-heading">
              Bought For
            </div>
            <div className="preview--title-category">
              Personal Use
            </div>
          </div>
          <div className="u-padding-top-bottom-10">
            <div className="preview--title-heading">
              Product Standouts
            </div>
            <div className="preview--title-category">
              Looks Expensive, Elegant, High Quality, Accurate Timekeeping
            </div>
          </div>          
        </div>
        <div className="preview--card right">
          <div className="u-padding-top-bottom-10">
            <i className="ui star large icon"></i>
            <i className="ui star large icon"></i>
            <i className="ui star large icon"></i>
            <i className="ui star large icon"></i>
            <i className="ui star large icon"></i>
          </div>
          <div className="preview--title-heading u-padding-top-bottom-10">Review Title</div>
          <div className="preview--title-category u-padding-bottom-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mollis magna, vitae mollis nisl.
          </div>
          <div className="u-padding-top-bottom-10">
            Quality
            <span className="u-padding-left-20">
              <i className="ui huge ellipsis horizontal icon"></i>
            </span>
          </div>
          <div className="u-padding-top-bottom-10">
            Design
            <span className="u-padding-left-20">
              <i className="ui huge ellipsis horizontal icon"></i>
            </span>
          </div>
          <div className="u-padding-top-bottom-10">
          Experience
            <span className="u-padding-left-20">
              <i className="ui huge ellipsis horizontal icon"></i>
            </span>
          </div>
        </div>
      </div>
    </FormCard>
    <SingleButton
      className="ui container
        ui button 
        color-teal
        btn-rating
        u-display-block 
        u-button-height-70 
        u-align-center-container"
      text="Submit review"
      />
  </div>
)

export default PreviewPage;


