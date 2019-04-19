import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ReviewForm from './form/ReviewForm';
import RatingForm from './form/RatingForm';
import MediaForm from './form/MediaForm';
import ConfirmForm from './form/ConfirmForm';
import PreviewPage from './form/PreviewPage';
import CompletedCheck from './formComponents/CompletedCheck';
import '../components/css/App.css';

class App extends Component {



  render() {
    // let form = [ 'Review', 'Ratings', 'Media', 'Confirm' ];
 
    const getForm = (component) => {
      if (component==='ReviewForm') {
        return <div>Review</div>;
      } else {
        return <div>Nothing Here</div>;
      }
    }

    return (
      <div className="app">
      <BrowserRouter>
          <div className="item form-heading">
            <div className="form-heading--product u-padding-top-bottom-10">1815 Rose Gold Chronograph Watch - Brown Croco Strap</div>
            <Route exact path="/" render={() => {return <div className="form-heading--title u-padding-top-bottom-10">Review</div>}} />
            <Route exact path="/ratings" render={() => {return <div className="form-heading--title u-padding-top-bottom-10">Ratings</div>}} />
            <Route exact path="/media" render={() => {return <div className="form-heading--title u-padding-top-bottom-10">Media</div>}} />
            <Route exact path="/confirm" render={() => {return <div className="form-heading--title u-padding-top-bottom-10">Confirm</div>}} />
            <Route exact path="/preview" render={() => {return <div className="form-heading--title u-padding-top-bottom-10">Preview</div>}} />
          </div>        
          <div className="form-heading ui container">
            <Link to="/" activeClassName="active">
              <CompletedCheck navHeading="Review" />
            </Link>
            <Link to="/ratings" activeClassName="active">
              <CompletedCheck navHeading="Ratings" />
            </Link>
            <Link to="/media" activeClassName="active">
              <CompletedCheck navHeading="Media" />
            </Link>
            <Link to="/confirm" activeClassName="active">
              <CompletedCheck navHeading="Confirm" />
            </Link>
          </div>
          <div className="forms ui container">
            <Route 
              exact path="/" 
              component={ReviewForm}
            />
            <Route 
              exact path="/ratings" 
              component={RatingForm}
            />
            <Route 
              exact path="/media" 
              component={MediaForm}
            />
            <Route 
              exact path="/confirm" 
              component={ConfirmForm}
            />
            <Route 
              exact path="/preview" 
              component={PreviewPage}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;