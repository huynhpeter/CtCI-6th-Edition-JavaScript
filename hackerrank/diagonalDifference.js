matrix = [[2, 3, 4], [5, 3, -1], [9, 8, -2]];

function diagonalDifference(arr) {  

  const matrixLength = arr.length;
  let diag1 = 0;
  let diag2 = 0;

  for (var i = 0; i < matrixLength; i++) {
    for (var j = 0; j < matrixLength; j++) {
      console.log(`(i,j), (${i},${j}})`);
      // an element from main diagonal from top left to bottom right
      if (i === j) {
        console.log(`matrix[i][j] ${matrix[i][j]}`);
        diag1 += matrix[i][j];
      }
      // an element from second diagonal from top right to bottom left
      if (i+j === matrixLength-1) {
        diag2 += matrix[i][j];
      }
      console.log(`-------------------------------`);
      
    }
  }
  return Math.abs(diag1-diag2)
}

// this is what the above looks like
// (0, 0) (0, 1) (0, 2)
// (1, 0) (1, 1) (1, 2)
// (2, 0) (2, 1) (2, 2)

console.log(diagonalDifference(matrix));
