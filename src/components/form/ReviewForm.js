import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormCard from '../formComponents/FormCard';
import StarRating from '../formComponents/StarRating';
import FieldInput from '../formComponents/FieldInput';
import FieldTextArea from '../formComponents/FieldTextArea';
import TwoButtons from '../formComponents/TwoButtons';
import SingleButton from '../formComponents/SingleButton';
import PopoutLink from '../formComponents/PopoutLink';
import '../css/ReviewForm.css';
import '../css/utilities.css';
import '../css/NextButton.css';


class ReviewForm extends Component {
  render() {
    const termsAndConditions = (
      <PopoutLink
        text="Terms and Conditions"
        href="https://www.okendo.io/end-user-terms/"
        icon="external alternate icon"
      />
    );

    const privacyPolicy = (
      <PopoutLink
        text="Privacy Policy"
        href="https://www.okendo.io/privacy-policy/"
        icon="external alternate icon"
      />
    );

    return (
      <div className="review form-position">
        <FormCard>
          <div className="u-padding-top-bottom-10">Your Rating</div>      
          <StarRating 
            label="Your Rating"
          />
          <FieldInput 
            label="Review Title"
            type="text"
            placeholder="Summary of your experience"
          />
          <FieldTextArea 
            label="Your Review"
            placeholder="Give us some detail about what you liked and disliked about the product"
          />
          <TwoButtons
            label="Would you recommend this product?"
          />
        </FormCard>

        <div className="terms-policy u-padding-top-bottom-10 u-align-center-container">
          By continuing you agree to our {termsAndConditions}, and {privacyPolicy}
        </div>

        <Link to="/ratings">
          <SingleButton
            className="ui container
              ui button
              color-teal
              u-display-block
              u-button-height-70
              u-align-center-container"
            text="Agree & Continue"
          />
        </Link>
      </div>
    );
  }
}

export default ReviewForm;