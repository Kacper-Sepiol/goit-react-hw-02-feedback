import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}</p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.object.isRequired,
  netural: PropTypes.object.isRequired,
  bad: PropTypes.object.isRequired,
  total: PropTypes.object.isRequired,
  positivePercentage: PropTypes.object.isRequired,
};

export default Statistics;
