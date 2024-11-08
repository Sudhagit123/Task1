export const isValidSudoku = (board) => {
    const isValidRow = (row) => {
      const seen = new Set();
      for (let num of row) {
        if (num !== '' && seen.has(num)) return false;
        seen.add(num);
      }
      return true;
    };
  
    const isValidCol = (board, colIndex) => {
      const seen = new Set();
      for (let row of board) {
        const num = row[colIndex];
        if (num !== '' && seen.has(num)) return false;
        seen.add(num);
      }
      return true;
    };
  
    const isValidBox = (board, startRow, startCol) => {
      const seen = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const num = board[startRow + i][startCol + j];
          if (num !== '' && seen.has(num)) return false;
          seen.add(num);
        }
      }
      return true;
    };
  
    for (let i = 0; i < 9; i++) {
      if (!isValidRow(board[i]) || !isValidCol(board, i)) return false;
    }
  
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        if (!isValidBox(board, i, j)) return false;
      }
    }
  
    return true;
  };