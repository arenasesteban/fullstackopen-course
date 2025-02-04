import { useState } from "react";

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

const Statistics = ({ good, neutral, bad, all, average, positive}) => {
  if(all > 0) {
    return (
      <div>
      <StatisticLine text={'Good'} value={good} />
      <StatisticLine text={'Neutral'} value={neutral} />
      <StatisticLine text={'Bad'} value={bad} />
      <StatisticLine text={'All'} value={all} />
      <StatisticLine text={'Average'} value={average} />
      <StatisticLine text={'Positive'} value={positive} percent={true} />
    </div>
    );
  } else {
    return (
      <p>No feedback given</p>
    );
  }
}

const StatisticLine = ({ text, value, percent }) => {
  return (
    <p>{text}: {value} {percent ? '%' : ''}</p>
  );
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: [],
    average: 0,
    positive: 0
  });

  const handleGoodClick = () => {
    const updateGood = feedback.good + 1;
    const updateAll = [...feedback.all, 1];

    setFeedback({
      ...feedback,
      good: updateGood,
      all: updateAll,
      average: updateAll.reduce((acc, num) => acc + num, 0) / updateAll.length,
      positive: (updateAll.filter(num => num === 1).length / updateAll.length) * 100 
    });
  }

  const handleNeutralClick = () => {
    const updateNeutral = feedback.neutral + 1;
    const updateAll = [...feedback.all, 0];

    setFeedback({
      ...feedback,
      neutral: updateNeutral,
      all: updateAll,
      average: updateAll.reduce((acc, num) => acc + num, 0) / updateAll.length,
      positive: (updateAll.filter(num => num === 1).length / updateAll.length) * 100 
    });
  }

  const handleBadClick = () => {
    const updateBad = feedback.bad + 1;
    const updateAll = [...feedback.all, -1];

    setFeedback({
      ...feedback,
      bad: updateBad,
      all: updateAll,
      average: updateAll.reduce((acc, num) => acc + num, 0) / updateAll.length,
      positive: (updateAll.filter(num => num === 1).length / updateAll.length) * 100 
    });
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text={'Good'} />
      <Button onClick={handleNeutralClick} text={'Neutral'} />
      <Button onClick={handleBadClick} text={'Bad'} />
      <h2>Statistics</h2>
      <Statistics 
        good={feedback.good}
        neutral={feedback.neutral} 
        bad={feedback.bad}
        all={feedback.all.length}
        average={feedback.average}
        positive={feedback.positive}
      />
    </div>
  );
}

export default App