import React from 'react';

export class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.counterGoodButton = 0;
    this.counterNeutralButton = 0;
    this.counterBadButton = 0;

    this.goodOnClick = this.goodOnClick.bind(this);
    this.neutralOnClick = this.neutralOnClick.bind(this);
    this.badOnClick = this.badOnClick.bind(this);
  }

  goodOnClick() {
    this.counterGoodButton += 1;
    this.setState({ good: this.counterGoodButton });
  }

  neutralOnClick() {
    this.counterNeutralButton += 1;
    this.setState({ neutral: this.counterNeutralButton });
  }

  badOnClick() {
    this.counterBadButton += 1;
    this.setState({ bad: this.counterBadButton });
  }

  render() {
    const { good, neutral, bad } = this.state;
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
      </>
    );
  }
}
