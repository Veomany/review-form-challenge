import React, {Component} from 'react';
import '../css/RoundButton.css';
import '../css/utilities.css';

class CompletedForm extends Component {
  render() {
    return (
      <div className="circle">
        <div className="circle--shape">
        </div>
        <div className="u-padding-top-bottom-10">{this.props.navHeading}</div>
      </div>
    );
  }
}

export default CompletedForm;