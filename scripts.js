//       ***********************
//            INSTRUCTIONS
//       ***********************


let currentMarker = 'X'

let board= 
[
["","",""],
["","",""],
["","",""]
]

const handleClick = (element) => {
  console.log(`The element you clicked on has an id:  ${element.id}`)
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}



// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  const row = parseInt(id.charAt(0));
  const column= parseInt(id.charAt(2));
  document.getElementById(id).innerHTML = currentMarker;
  board[row][column] = currentMarker;
  checkForWin();
}



const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}



const resetBoard = () => { 
  const squares = document.getElementsByTagName("td")
  for (i=0; i < squares.length; i++) {
    squares[i].innerHTML = null
    board = 
            [
            ["","",""],
            ["","",""],
            ["","",""]
            ]
    currentMarker = "X"
  }  
}


const checkForWin = () => {
  if(horizontalWin() == true || verticalWin() == true || diagonalWin() == true) 
  {
    alert(`Player ${currentMarker} won!`)
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || 
  
  (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") || 
  
  (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || 
  
  (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") ||
  
  (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") || 
  
  (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")) {
    return true
  } else {
    return false
  }
}

const verticalWin = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || 
  
  (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") || 
  
  (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") || 
  
  (board[0][1] == "O" && board[0][2] == "O" && board[0][3] == "O") ||
  
  (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") || 
  
  (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")) {
    return true
  } else {
    return false
  }
}

const diagonalWin = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || 
  
  (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") || 
  
  (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || 
  
  (board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O")) {
    return true
  } else {
    return false
  }
}