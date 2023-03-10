import { useState } from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const  [bad, setBad] = useState(0);

  const btn = [{ good }, { neutral }, { bad }];
  
  const btnClick = (event) => {
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      
      default: return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    if (![good] || countTotalFeedback() === 0) {
      return;
    }
     positivePercentage = good / countTotalFeedback() * 100;
    return positivePercentage;
  };
  
   return (
      <div style={{margin: '40px'}}>
        <Section title="Plese leave feedback" />
        <FeedbackOptions
          options={btn}
          onLeaveFeedback={btnClick}
        />
        <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
          />
    </div>
  );
}

