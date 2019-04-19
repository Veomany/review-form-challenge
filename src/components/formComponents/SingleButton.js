import React, { Component } from 'react';
import '../css/SingleButton.css';
import '../css/utilities.css';

class SingleButton extends Component {
  state = { selection: false };

  onMouseClick = (event) => {
    let { selection } = this.state;
    // event.preventDefault();

    this.setState({ selection: !selection });
  
    
    // console.log(event.target);
    // if ( !disabled === this.event.target ) {
    //   this.setState({ clicked: 'ui teal button' });
    // }    
  }

  render() {
    return (
      <div>
        <button onClick={this.onMouseClick} className={this.props.className}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default SingleButton;