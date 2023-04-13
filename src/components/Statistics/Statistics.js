import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonOnClick = ({ currentTarget }) => {
    const response = currentTarget.textContent.toLowerCase();

    this.setState(prevState => {
      return { [response]: prevState[response] + 1 };
    });
  };

  totalReviewCalc = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveReviewShare = () => {
    const { good, neutral } = this.state;
    return Math.floor(((good + neutral) / this.totalReviewCalc()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const checkStatistics = good + neutral + bad;

    return (
      <div>
        <Button buttonOnClick={this.buttonOnClick} />
        {!checkStatistics ? (
          <p>There is no feedback</p>
        ) : (
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {this.totalReviewCalc()}</p>
            <p>Total: {this.positiveReviewShare()}%</p>
          </div>
        )}
      </div>
    );
  }
}

export default Statistics;
