import React from 'react';

export class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.totalFeedback = {
      total: 0,
    };

    this.counterGoodButton = 0;
    this.counterNeutralButton = 0;
    this.counterBadButton = 0;

    this.goodOnClick = this.goodOnClick.bind(this);
    this.neutralOnClick = this.neutralOnClick.bind(this);
    this.badOnClick = this.badOnClick.bind(this);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
  }

  countTotalFeedback() {
    this.setState({ total: 1 });
  }

  goodOnClick() {
    this.counterGoodButton += 1;
    this.setState({ good: this.counterGoodButton });
    this.total += 1;
  }

  neutralOnClick() {
    this.counterNeutralButton += 1;
    this.setState({ neutral: this.counterNeutralButton });
    this.total += 1;
  }

  badOnClick() {
    this.counterBadButton += 1;
    this.setState({ bad: this.counterBadButton });
    this.countTotalFeedback();
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { total } = this.countTotalFeedback;
    return (
      <>
        <h1>Please leave feedback</h1>

        <button type="button" onClick={this.goodOnClick}>
          Good
        </button>
        <button type="button" onClick={this.neutralOnClick}>
          Neutral
        </button>
        <button type="button" onClick={this.badOnClick}>
          Bad
        </button>

        <h2>Statistics</h2>

        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
      </>
    );
  }
}
