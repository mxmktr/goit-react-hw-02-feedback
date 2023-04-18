import React from 'react';
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
      <p>Total: {positivePercentage()}%</p>
    </>
  );
}
