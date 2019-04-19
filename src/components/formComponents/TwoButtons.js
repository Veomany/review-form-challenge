import React, {Component} from 'react';
import '../css/utilities.css';
import '../css/TwoButtons.css';

class TwoButtons extends Component {
  render() {
    return (
      <div className="u-padding-top-bottom-10">
        <form className="ui form">
          <label
            className="u-padding-top-bottom-10 u-display-block"
          >
            {this.props.label}
          </label>
          <div className="ui two buttons two-buttons u-padding-bottom-10">
            <button className="ui button">YES</button>
            <button className="ui button">NO</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TwoButtons;