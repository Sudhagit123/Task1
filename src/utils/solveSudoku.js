export const solveSudoku = (board) => {
    const findEmpty = (board) => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (board[i][j] === '') return [i, j];
        }
      }
      return null;
    };
  
    const isValid = (board, row, col, num) => {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) return false;
      }
  
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[startRow + i][startCol + j] === num) return false;
        }
      }
  
      return true;
    };
  
    const solve = (board) => {
      const emptyPos = findEmpty(board);
      if (!emptyPos) return true;
  
      const [row, col] = emptyPos;
      for (let num = 1; num <= 9; num++) {
        if (isValid(board, row, col, num.toString())) {
          board[row][col] = num.toString();
          if (solve(board)) return true;
          board[row][col] = '';
        }
      }
  
      return false;
    };
  
    const boardCopy = board.map(row => row.slice());
    solve(boardCopy);
    return boardCopy;
  };