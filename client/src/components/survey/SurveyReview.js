import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FIELDS from "./formFields";
import { sendSurvey } from "../../actions/index";

class SurveyReview extends Component {
  renderContent = () => {
    return FIELDS.map(({ label, name }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{this.props.formValues[name]}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h5>Please confirm your entries</h5>
        {this.renderContent()}
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={this.props.onCancel}
        >
          Back
        </button>
        <button
          onClick={() =>
            this.props.sendSurvey(this.props.formValues, this.props.history)
          }
          className="green white-text btn-flat right"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, { sendSurvey })(
  withRouter(SurveyReview)
);
