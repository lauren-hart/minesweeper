document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here! This is the long way


 /*var board = {
    cells: [
      {row:0,col:0,isMine:false,hidden:true},
      {row:0,col:1,isMine:false,hidden:true},
      {row:0,col:2,isMine:true,hidden:true},
      {row:1,col:0,isMine:false,hidden:true},
      {row:1,col:1,isMine:false,hidden:true},
      {row:1,col:2,isMine:true,hidden:true},
      {row:2,col:0,isMine:false,hidden:true},
      {row:2,col:1,isMine:true,hidden:true},
      {row:2,col:2,isMine:false,hidden:true}
    ]
  };
  */
/* Define your `board` object here! - This is the shorter way to do it. 
Instead of typing out the global board object, write a function to create it. 

Each cell will need row, col, isMine, isMarked and hidden properties

You could start by simply setting every isMine to true, but later you'll 
probably want to have a random number of mines scattered throughout the board. 
*/

var board = {
  cells: []
};

var boardSize = 4; //max should be 6

function gameBoard () {
  for (var r = 0; r < boardSize; r++) {
    for (var c = 0; c < boardSize; c++) {
      board.cells.push({
        col: c,
        row: r,
        isMine: Math.random() >= 0.5,
        hidden: true,

      })
    }
  }
}




  
function startGame () { 
  gameBoard();
  for (var i = 0; i < board.cells.length; i++) {
    var surroundingMines = countSurroundingMines(board.cells[i])
  }

  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);



  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  //defining the checkForWin function, it should loop through all
  //of board.cells. For each cell, check to see if both .isMine and
  //.isMarked are true.
  
  for (var i = 0; i < board.cells.length; i++) {
    if(board.cells[i].isMine) {
      if (!board.cells[i].isMarked);
      return;

    } else if (board.cells[i].hidden)
    return;
  }
    lib.displayMessage('You win!');
  
    //If any mine still exists that isn't marked, the player hasn't won
    //yet and you can return out of the function


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.



function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells (cell.row, cell.col);
  var count = 0;

  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine == true) {
      count++;

      console.log(count)
    }
  }
  return count;
} 







  


