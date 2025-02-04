import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

const Votes = ({ anecdotes, votes}) => {
  if(votes.length > 0) {
    let index = 0;
    let maxVotes = 0;

    for(let i = 0; i < votes.length; i++) {
      if(votes[i] > maxVotes) {
        index = i;
        maxVotes = votes[i];
      }
    }

    return (
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[index]}</p>
        <p>Has {votes[index]} votes</p>
      </div>
    );
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([]);

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVoteClick = () => {
    const updateVotes = [...votes];

    updateVotes[selected] = updateVotes[selected] ? votes[selected] + 1 : 1;

    setVotes(updateVotes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        <Button onClick={handleVoteClick} text={'Vote'}/>
        <Button onClick={handleNextAnecdote} text={'Next anecdote'}/>
      </div>
      <Votes anecdotes={anecdotes} votes={votes} />
    </div>
  );
}

export default App;