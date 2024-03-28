import React, { useState } from 'react';
import './Task.css'; // Import the CSS file

export default function Task() {
  const initialBooks = ["C", "CPP", "Java", "Python", "JavaScript"];
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState('');
  const [showBooks, setShowBooks] = useState(true);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [isCalculateSumButtonEnabled, setIsCalculateSumButtonEnabled] = useState(false);

  const toggleBooks = () => {
    setShowBooks(!showBooks);
  };

  const addBook = () => {
    if (newBook.trim() !== '') {
      setBooks([...books, newBook]);
      setNewBook('');
    }
  };

 

  const enableCalculateSumButton = () => {
    setIsCalculateSumButtonEnabled(true);
  };

  const disableCalculateSumButton = () => {
    setIsCalculateSumButtonEnabled(false);
  };

  const calculateSum = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  const handleNum1Change = (value) => {
    setNum1(value);
    setIsCalculateSumButtonEnabled(value && num2);
  };

  const handleNum2Change = (value) => {
    setNum2(value);
    setIsCalculateSumButtonEnabled(value && num1);
  };

  return (
    <div className="container"> {/* Apply the container class */}
      <h1>Task-1</h1>
      <div>
        <button class="btn" onClick={toggleBooks}>
          {showBooks ? 'Hide Books' : 'Show Books'}
        </button>
        {showBooks && (
          <ul>
            {books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        )}
        <div>
          <input
            type="text"
            value={newBook}
            onChange={(e) => {
              setNewBook(e.target.value);
            }}
            placeholder="Enter a new programming Language"
          />
          <button  class="btn" onClick={addBook}>
            Add programming Language
          </button>
          <div>
            <input
              type="number"
              value={num1}
              onChange={(e) => handleNum1Change(e.target.value)}
              placeholder="Enter number 1"
            />
            <input
              type="number"
              value={num2}
              onChange={(e) => handleNum2Change(e.target.value)}
              placeholder="Enter number 2"
            />
            <button  class="btn" onClick={calculateSum} disabled={!isCalculateSumButtonEnabled}>
              Calculate Sum
            </button>
            {result && <p>Sum: {result}</p>}
            <div>
              <button class="btn" onClick={enableCalculateSumButton}>Enable Calculate Sum Button</button>
              <button class="btn" onClick={disableCalculateSumButton}>Disable Calculate Sum Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}