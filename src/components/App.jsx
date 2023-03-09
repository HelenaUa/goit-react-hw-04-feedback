import React, { Component } from "react";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // addGood = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };
  
  // addNeutral = () => { 
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // addBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  //  };
  
  btnClick = (options) => {
    this.setState({
       [options.currentTarget.innerText]: this.state[options.currentTarget.innerText] + 1 
    })
  }
  
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    if (!this.state.good || this.countTotalFeedback() === 0) {
      return;
    }
     positivePercentage = this.state.good / this.countTotalFeedback() * 100;
    return positivePercentage;
  };
  
  render() {
    return (
      <div>
        <Section title="Plese leave feedback" />
        <FeedbackOptions
          // addGood={this.addGood}
          // addNeutral={this.addNeutral}
          // addBad={this.addBad}
          options={Object.keys(this.state)}
          onLeaveFeedback={this.btnClick}
        />
        <Statistics 
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />
    </div>
  );
  }
  
};
