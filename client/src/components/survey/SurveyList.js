import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (!this.props.surveys) return null;
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className="card blue-grey white-text darken-1">
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
            <div className="card-action">
              <a href="#">Yes: {survey.yes}</a>
              <a href="#">No: {survey.no}</a>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = state => ({
  surveys: state.surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
