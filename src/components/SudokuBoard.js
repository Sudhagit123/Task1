import React, { useState } from 'react';

const SudokuBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(Array(9).fill('')));

  const handleChange = (row, col, value) => {
    const newBoard = board.map((r, i) => 
      r.map((c, j) => (i === row && j === col ? value : c))
    );
    setBoard(newBoard);
  };

  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <input
              key={colIndex}
              type="text"
              maxLength="1"
              value={cell}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuBoard;