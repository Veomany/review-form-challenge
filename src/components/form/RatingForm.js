import React, { Component } from 'react';
import FormCard from '../formComponents/FormCard';
import NumberRating from '../formComponents/NumberRating';
import SingleButton from '../formComponents/SingleButton';
import CountrySearch from '../formComponents/CountrySearch';
import '../css/RatingForm.css';
import '../css/utilities.css';


class RatingForm extends Component {  
  render() {
    let productStandoutsItems = ['Accurate Timekeeping', 'High Quality','Durable', 'Elegant', 'Good Weight', 'Versatile', 'Looks Expensive', 'Attracts Compliments', 'Great Gift', 'Great Value'];
  
    let productStandouts = productStandoutsItems.map((productStandouts) => {
    return <SingleButton key={productStandouts} className="ui button u-margin-3-5" text={productStandouts} />
    });

    let ageRangeItems = [ 'Under 18', '18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+' ];

    let ageRange = ageRangeItems.map((ageRange) => {
      return <SingleButton key={ageRange} className="ui button u-margin-3-5" text={ageRange} />
      });

    return (
      <div className="form-position">
        <FormCard>
          <NumberRating
            label="Quality"
          />
          <NumberRating
            label="Design"
          />
          <NumberRating
            label="Experience"
          />

          <div className="u-padding-top-bottom-10">
            <div>Product Standouts</div>
            <div>Choose up to 5 that best apply (optional)</div>
            <div className="u-button-wrap">{productStandouts}</div>  
          </div>

          <div className="u-padding-top-bottom-10">
            <h4>About You</h4>
            <div className="age-range">
              <div>Age Range</div>
              <div className="u-padding-bottom-10">
                Choose
                <span className="u-font-weight-bold">
                  one
                </span>
              </div>
              <div className="u-button-wrap">
                {ageRange}
              </div>  
            </div>
            <div className="bought-for">
              <div>Bought For</div>
              <div className="u-padding-bottom-10">
                Choose
                <span className="u-font-weight-bold">
                  one
                </span>
              </div>
              <div className="u-button-wrap">
                <SingleButton
                  className="ui button u-margin-3-5"
                  text="Personal Use"
                />
                <SingleButton 
                  className="ui button u-margin-3-5"
                  text="Gift"
                />
              </div> 
            </div>

            <div>Country</div>
            <CountrySearch />
          </div>
        </FormCard>
        
        <SingleButton
            className="ui teal button u-display-block u-button-height-70 u-align-center-container"
            text="Next"
          />
      </div>
    );
  }
}

export default RatingForm;