import { Component } from "react";
import FeedbackOptions from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0

  }
  bool = Boolean(this.state.good);

  handleClickIncrement = (e) => {
    const { name } = e.target;
    this.setState(prevState => {
      const updatedState = { ...prevState, [name]: prevState[name] + 1 };
      updatedState.total += 1;
      return updatedState;
    }, this.countPositiveFeedbackPercentage);
  }


  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = total > 0 ? Math.round((good / total) * 100) : 0;
    this.setState({ positive: percentage });
  };
  
  render() {
    return (
      <div>
        < FeedbackOptions feedbackHandler={this.handleClickIncrement} />
        {this.state.good || this.state.neutral || this.state.bad ? (
          <Statistics data={this.state} />
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    )
  };
};
