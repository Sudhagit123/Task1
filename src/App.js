import React, { useState } from 'react';
import SudokuBoard from './components/SudokuBoard';
import { isValidSudoku } from './utils/validateBoard';
import { solveSudoku } from './utils/solveSudoku';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(Array(9).fill('')));
  const [message, setMessage] = useState('');

  const handleSolve = () => {
    if (isValidSudoku(board)) {
      const solvedBoard = solveSudoku(board);
      setBoard(solvedBoard);
      setMessage('Sudoku solved!');
    } else {
      setMessage('Invalid Sudoku configuration.');
    }
  };

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <SudokuBoard board={board} setBoard={setBoard} />
      <button onClick={handleSolve}>Solve</button>
      <p>{message}</p>
    </div>
  );
};

export default App;