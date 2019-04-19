import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormCard from '../formComponents/FormCard';
import NumberRating from '../formComponents/NumberRating';
import SingleButton from '../formComponents/SingleButton';
import CountrySearch from '../formComponents/CountrySearch';
import '../css/RatingForm.css';
import '../css/utilities.css';
import '../css/NextButton.css';


class RatingForm extends Component { 
  render() {

    let productStandoutsItems = ['Accurate Timekeeping', 'High Quality','Durable', 'Elegant', 'Good Weight', 'Versatile', 'Looks Expensive', 'Attracts Compliments', 'Great Gift', 'Great Value'];
  
    let productStandouts = productStandoutsItems.map((productStandouts) => {
    return <SingleButton key={productStandouts} className="ui button u-margin-3-5" text={productStandouts} />
    });

    let ageRangeItems = [ 'Under 18', '18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+' ];

    let ageRange = ageRangeItems.map((ageRange) => {
      return <SingleButton key={ageRange} className={`u-margin-3-5 ui button`} text={ageRange} />
    });
      
    return (
      <div className="rating form-position">
        <FormCard>
          <div className="u-padding-top-bottom-10">
            <NumberRating
              label="Quality"
            />
            <NumberRating
              label="Design"
            />
            <NumberRating
              label="Experience"
            />
          </div>
  
          <div className="u-padding-top-bottom-10">
            <div className="title--subheading">
              Product Standouts
            </div>
            <div className="title--action u-padding-bottom-10">
              Choose up to 5 that best apply (optional)
            </div>
            <div className="u-button-wrap">
              {productStandouts}
            </div>  
          </div>

          <div className="u-padding-top-bottom-10">
            <h4>About You</h4>
            <div className="age-range">
              <div className="title--subheading">Age Range</div>
              <div className="title--action u-padding-bottom-10">
                Choose
                <span className="u-font-weight-bold u-margin-3-5">
                  one
                </span>
              </div>
              <div className="u-button-wrap">
                {ageRange}
              </div>  
            </div>
            <div className="bought-for u-padding-top-bottom-10">
              <div className="title--subheading">Bought For</div>
              <div className="title--action u-padding-bottom-10">
                Choose
                <span className="u-font-weight-bold u-margin-3-5">
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
            

            <div className="u-padding-bottom-10">Country</div>
            <CountrySearch />
          </div>
        </FormCard>

        <Link to="/media">
          <SingleButton
            className="ui button 
              color-teal
              btn-rating
              u-display-block 
              u-button-height-70 
              u-align-center-container"
            text="Next"
          />
        </Link>
      </div>
    );
  }
}

export default RatingForm;