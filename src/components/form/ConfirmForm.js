import React from 'react';
import { Link } from 'react-router-dom';
import FormCard from '../formComponents/FormCard';
import FieldInput from '../formComponents/FieldInput';
import SingleButton from '../formComponents/SingleButton';
import { Divider, Segment } from 'semantic-ui-react';
import '../css/ConfirmForm.css';
import '../css/utilities.css';


const ConfirmForm = () => (
  <div className="confirm form-position">
    <FormCard>
      <Segment basic textAlign='center'>
        <h3 className="confirm--heading">
          Add your profile picture to your review!
        </h3>
        <p className="confirm--subheading">
          This helps other shoppers by adding authenticity to your review.
        </p>
        <button className="ui google plus button">
          <i className="google plus g large icon"></i>
          <span className="u-padding-left-20">Connect with Google+</span>
        </button>
        <button className="ui facebook button">
          <i className="facebook f large icon"></i>
          <span className="u-padding-left-20">Connect with Facebook</span>
        </button>

        <Divider horizontal>Or</Divider>

        <div className="login-border">
          <div className="u-align-text-left">Continue as Guest</div>
          <FieldInput placeholder="Name" />
          <FieldInput placeholder="Email Address" />
          <Link to="/preview">
            <SingleButton className="ui button color-teal u-align-center-container" text="Continue"/>
          </Link>
          <div>Your email address will not be published.</div>
        </div>
      </Segment>
    </FormCard>
  </div>

)

export default ConfirmForm;


