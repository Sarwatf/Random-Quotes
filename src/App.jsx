import React, { useState } from 'react';
import './App.css';

const Quotes = [
  "The best way to predict the future is to create it",
  "Life is what happens when you're busy making other plans",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  "The journey of a thousand miles begins with one step.",
  "The only thing necessary for the triumph of evil is for good men to do nothing.",
  "I think, therefore I am.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
];

function App() {
  const [quote, setQuote] = useState(""); 

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setQuote(Quotes[randomIndex]);
  }

  return (
    <div>
      <h1>Quote generator</h1>
      <p>{quote}</p> 
      <button onClick={generateQuote}>Get Quote</button>
    </div>
  );
}

export default App;