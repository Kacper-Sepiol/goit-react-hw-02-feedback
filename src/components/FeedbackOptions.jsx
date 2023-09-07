import React from 'react';

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

export default FeedbackOptions;
