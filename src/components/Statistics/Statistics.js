import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return isNaN(positivePercentage()) ? (
    <Notification message={'There is no feedback'} />
  ) : (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage()}%</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
