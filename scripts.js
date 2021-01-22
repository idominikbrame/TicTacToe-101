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


//change current marker
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}



// reset td's to null
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



//initiate checking for win
const checkForWin = () => {
  if(horizontalWin() == true || verticalWin() == true || diagonalWin() == true) 
  { 
    incrementScore()
    let winner = setTimeout(showWinner, 200);
    let reset = setTimeout(resetBoard, 100)
  } else {
    changeMarker()
  }
}


//check for horizontal win
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


//check for vertical win
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


//check for diagonal win
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


//Display winner on screen
function showWinner(){
  document.getElementById("showWinner").style.visibility = "visible";
  document.querySelector("#showWinner h1").innerHTML = "'" + currentMarker + "'" + " is your winner!";
  let remove = setTimeout(removeWinner, 3500);
}
function removeWinner() {
    document.getElementById("showWinner").style.visibility = "hidden";
}


//Increment Score
let scoreX = 0;
let scoreO = 0;
function incrementScore() {
  if (currentMarker == "X") {
    document.getElementById("X").innerHTML = "X's: " + ++scoreX
  } else if (currentMarker == "O") {
    document.getElementById("O").innerHTML = "X's: " + ++scoreO
  }
}