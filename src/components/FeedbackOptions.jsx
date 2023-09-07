import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <button type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
