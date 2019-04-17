import React, { Component } from 'react';
import ReviewForm from './form/ReviewForm';
import RatingForm from './form/RatingForm';
import CompletedForm from './formComponents/CompletedForm';
import './css/App.css';

class App extends Component {

  // let form = [ 'review', 'ratings', 'media', 'confirm' ];
 

  render() {
    return (
      <div className="app">
        <div className="item u-align-text-center">
          <div>1815 Rose Gold Chronograph Watch - Brown Croco Strap</div>
          <div></div>
        </div>
        <div className="form-heading ui container">
          <CompletedForm navHeading="Review" />
          <CompletedForm navHeading="Ratings" />
          <CompletedForm navHeading="Media" />
          <CompletedForm navHeading="Confirm" />
        </div>
        <div className="forms ui container">
          <ReviewForm />
          {/* <RatingForm /> */}
        </div>
      </div>
    );
  }
}

export default App;