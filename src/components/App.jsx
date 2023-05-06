import { Component } from "react";
import Section from "./Section/Section"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0
  }

  handleClickIncrement = (e) => {
    const { name } = e.target;
    this.setState(prevState => {
      const updatedState = { ...prevState, [name]: prevState[name] + 1 };
      updatedState.total += 1;
      return updatedState;
    }, this.countPositiveFeedbackPercentage);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = total > 0 ? Math.round((good / total) * 100) : 0;
    this.setState({ positive: percentage });
  };
  
  render() {
    return (
      <Section data={ this.state} feedbackHandler ={this.handleClickIncrement} />
    )
  };
};
