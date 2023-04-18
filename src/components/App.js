import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Button from './Button/Button';
import Section from './Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedBack = 'Please leave feedback';

  buttonOnClick = ({ currentTarget }) => {
    const response = currentTarget.textContent.toLowerCase();

    this.setState(prevState => {
      return { [response]: prevState[response] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral } = this.state;
    return Math.floor(((good + neutral) / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="container">
        <Section message={this.feedBack}>
          <Button onClick={this.buttonOnClick} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
