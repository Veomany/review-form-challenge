import React, {Component} from 'react';
import '../css/utilities.css';
import '../css/TwoButtons.css';

class TwoButtons extends Component {

  // onMouseClick() {
  //   <div className="ui teal button"></div>
  // }

  showAlert() {
    alert("Im an alert");
  }

  render() {
    return (
      <div>
        <form className="ui form">
          <label
            className="u-padding-top-bottom-10 u-display-block"
          >
            {this.props.label}
          </label>
          <div className="ui two buttons two-buttons">
            <button className="ui button" onClick={this.showAlert}>YES</button>
            <button className="ui button">NO</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TwoButtons;