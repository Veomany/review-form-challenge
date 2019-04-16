import React, { Component } from 'react';
import FormCard from '../formComponents/FormCard';
import StarRating from '../formComponents/StarRating';
import FieldInput from '../formComponents/FieldInput';
import FieldTextArea from '../formComponents/FieldTextArea';
import TwoButtons from '../formComponents/TwoButtons';
import OneButton from '../formComponents/OneButton';

class ReviewForm extends Component {

  render() {
    return (
      <div>
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

        <OneButton
          label="By continuing you agree to our Terms and Conditions ,and Privacy Policy "
          text="Agree & Continue"
        />
      </div>
    );
  }
}

export default ReviewForm;