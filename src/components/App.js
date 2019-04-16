import React, { Component } from 'react';
import ReviewForm from './form/ReviewForm';
import './css/App.css';

class App extends Component {

  render() {
    return (
      <div className="app ui container">
        <ReviewForm />
      </div>
    );
  }
}

export default App;