import React, { Component } from 'react';
import FormCard from '../formComponents/FormCard';
import StarRating from '../formComponents/StarRating';
import FieldInput from '../formComponents/FieldInput';
import FieldTextArea from '../formComponents/FieldTextArea';
import TwoButtons from '../formComponents/TwoButtons';
import SingleButton from '../formComponents/SingleButton';
import PopoutLink from '../formComponents/PopoutLink';
import '../css/utilities.css';


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
      <div className="form-position">
        <FormCard>        
          <StarRating 
            label="Your Rating"
          />
          <FieldInput 
            label="Review Title"
            type="text"
          />
          <FieldTextArea 
            label="Your Review"
          />
          <TwoButtons
            label="Would you recommend this product?"
          />
        </FormCard>

        <div>
          By continuing you agree to our {termsAndConditions}, and {privacyPolicy}
        </div>
        <SingleButton
          className="ui teal button
            u-display-block
            u-button-height-70
            u-align-center-container"
          text="Agree & Continue"
        />
      </div>
    );
  }
}

export default ReviewForm;