console.log("Summer time fun")

//Declaring player valus
let playerPick = "X"

let computerPick = "O"

let currentPlayer = "X"

let newGame = ['','','','','','','','','']; //place empty holders for buttons.


//Declaring winning messages.

const playerXWon = 'Player X one this round';
const playerOWon = 'Player O one this round';
const draw = 'Neither player one';

//CALLING the game Id's FROM HTML
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
//There's a break here
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
//There's a break here
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");

const buttonAll = document.querySelectorAll(".circle");




//checking if button1 is accepting click:
function test (){
  console.log("clicked button")
}

const buttons = document.querySelector('#button1');

// buttons.querySelectorAll('#button').forEach(button => button.addEventListener("click", resetgame));
//Calling all buttons
buttons.addEventListener("click", test);

//


const playButton = document.querySelector("#play");
//call play button
playButton.addEventListener("click", play);

const howToButton = document.querySelector("#hotTo");
//call how to
// howToButton.addEventListener("click", howTo);

const startOverButton = document.querySelector("#startOver");
//call start over
startOverButton.addEventListener("click", startOver);

//Calling all Winners
const winnersCircle = document.querySelector("#winnersCircle");

// playButton.addEventListener("click", playGame);

const winCombinations = [ //Organizing the winning combos into an array
   [0, 1, 2],
   [3, 4, 5],//
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
 ]
class Game {

playerPickTurn = true;
swapTurns () {
  this.playerPickTurn = !this.playerPickTurn
}

tied = 0;

tie (){
  if (this.tied === 9){
    winnersCircle.innterHTML = "Welp, it's a Tie"
    alert ("Welp, it's a Tie")
  }
}

}

function players() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.textContent = playersTurn();
  }

let gameReady = true;

function gameStart (){
  let win = false;
  for (let i = 0; i <= 7; i++){
    const win = winCombinations[i];

        let playerSign1 = gameBoard[gameWin[0]];
        let playerSign2 = gameBoard[gameWin[1]];  //arrays to represent player selected square choices.
        let playerSign3 = gameBoard[gameWin[2]];
        if (playerSign1 === "" || playerSign2 === "" || playerSign3 === "")  //player peices are not the same.


        if (playerSign1 === playerSign2 && playerSign2 === playerSign3) { //if player game symbols ("X || O" ) are all equal to each other, player wins!
            winningGame = true;

        }
      }
    }
// ------Start Game-------

// function play (){
//   if (new game = '')
//   alert ("let's play!")
// }

function thegame () {

let button1, button2, button3, button4, button5, button6, button7, button8, button9;

  buttonWon = document.getElementbyId("#button1").value;
  buttonToo = document.getElementbyId("#button2").value;
  buttonTree = document.getElementbyId("#button3").value;
  buttonFor = document.getElementbyId("#button4").value;
  buttonFive = document.getElementbyId("#button5").value;
  buttonSix = document.getElementbyId("#button6").value;
  buttonSeven = document.getElementbyId("#button7").value;
  buttonAte = document.getElementbyId("#button8").value;
  buttonNine = document.getElementbyId("#button9").value;

  if (button1 == 'X' && button2 == 'X' && button3 == 'X'){
    document.getElementById('#message')
    .innerHTML = 'Player X won this one';
    document.getElementbyId("button4").disabled = true;
    document.getElementbyId("button5").disabled = true;
    document.getElementbyId("button6").disabled = true;
    document.getElementbyId("button7").disabled = true;
    document.getElementbyId("button8").disabled = true;
    document.getElementbyId("button9").disabled = true;
    alert("Player X won this one");
  }
  else if (button4 == 'X' && button5 == 'X' && button6 == 'X'){
    document.getElementById('#message')
    .innerHTML = 'Player X won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("button2").disabled = true;
    document.getElementbyId("button3").disabled = true;
    document.getElementbyId("button7").disabled = true;
    document.getElementbyId("button8").disabled = true;
    document.getElementbyId("button9").disabled = true;
  }
  else if (button7 =='X' && button8 == 'X' && button9 == 'X') {
    document.getElementById('#message')
    .innerHTML = 'Player X won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("button2").disabled = true;
    document.getElementbyId("button3").disabled = true;
    document.getElementbyId("button4").disabled = true;
    document.getElementbyId("button5").disabled = true;
    document.getElementbyId("button6").disabled = true;
  }
  else if (button1 == 'X' && button4 == 'X' && button7 == 'X'){
    document.getElementById('#message')
    .innerHTML = 'Player X won this one';
    document.getElementbyId("button2").disabled = true;
    document.getElementbyId("button3").disabled = true;
    document.getElementbyId("button5").disabled = true;
    document.getElementbyId("button6").disabled = true;
    document.getElementbyId("button8").disabled = true;
    document.getElementbyId("button9").disabled = true;
  }
  else if (button2 == 'X' && button5 == 'X' && button8 == 'X') {
    document.getElementById('#message')
    .innerHTML = 'Player X won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("button3").disabled = true;
    document.getElementbyId("button4").disabled = true;
    document.getElementbyId("button6").disabled = true;
    document.getElementbyId("button7").disabled = true;
    document.getElementbyId("button9").disabled = true;
  }
  else if (buttonTree = 'X' && buttonSix == 'X' && buttonNine == 'X'){
    document.getElementById('#message')
    .innerHTML = 'Player X won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("buttonToo").disabled = true;
    document.getElementbyId("buttonFor").disabled = true;
    document.getElementbyId("buttonFive").disabled = true;
    document.getElementbyId("buttonSeven").disabled = true;
    document.getElementbyId("buttonAte").disabled = true;
  }
  else if (buttonTree == 'X' && buttonFive == 'X' && buttonSeven == 'X'){
    document.getElementById('#message')
    .innerHTML = 'Player X won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("buttonToo").disabled = true;
    document.getElementbyId("buttonFor").disabled = true;
    document.getElementbyId("buttonSix").disabled = true;
    document.getElementbyId("buttonAte").disabled = true;
    document.getElementbyId("buttonNine").disabled = true;
  }
  else if (button1 == 'X' && buttonFive == 'X' && buttonNine == 'X'){
    document.getElementById('#message')
    .innerHTML = 'Player X won this one';
    document.getElementbyId("buttonToo").disabled = true;
    document.getElementbyId("buttonTree").disabled = true;
    document.getElementbyId("buttonFor").disabled = true;
    document.getElementbyId("buttonSix").disabled = true;
    document.getElementbyId("buttonSeven").disabled = true;
    document.getElementbyId("buttonAte").disabled = true;
  }
  else if (button1 == 'O' & buttonToo == 'O' && buttonTree == 'O'){
    document.getElementById('#message')
    .innerHTML = 'Player O won this one';
    document.getElementbyId("buttonFor").disabled = true;
    document.getElementbyId("buttonFive").disabled = true;
    document.getElementbyId("buttonSix").disabled = true;
    document.getElementbyId("buttonSeven").disabled = true;
    document.getElementbyId("buttonAte").disabled = true;
    document.getElementbyId("buttonNine").disabled = true;
  }
  else if (buttonFor == 'O' & buttonFive == 'O' && buttonSix == 'O'){
    document.getElementById('#message')
    .innerHTML = 'Player O won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("buttonToo").disabled = true;
    document.getElementbyId("buttonTree").disabled = true;
    document.getElementbyId("buttonSeven").disabled = true;
    document.getElementbyId("buttonAte").disabled = true;
    document.getElementbyId("buttonNine").disabled = true;
  }
  else if (buttonSeven == 'O' && buttonAte =='O' && buttonNine == 'O'){
    document.getElementById('#message')
    .innerHTML = 'Player O won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("buttonToo").disabled = true;
    document.getElementbyId("buttonTree").disabled = true;
    document.getElementbyId("buttonFor").disabled = true;
    document.getElementbyId("buttonFive").disabled = true;
    document.getElementbyId("buttonSix").disabled = true;
  }
  else if (button1 == 'O' && buttonFor == 'O' && buttonSeven == 'O'){
    document.getElementById('#message')
    .innerHTML = 'Player O won this one';
    document.getElementbyId("buttonToo").disabled = true;
    document.getElementbyId("buttonTree").disabled = true;
    document.getElementbyId("buttonFive").disabled = true;
    document.getElementbyId("buttonSix").disabled = true;
    document.getElementbyId("buttonAte").disabled = true;
    document.getElementbyId("buttonNine").disabled = true;
  }
  else if (buttonToo == 'O' && buttonFive == 'O' && buttonAte == 'O'){
    document.getElementById('#message')
    .innerHTML = 'Player O won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("buttonTree").disabled = true;
    document.getElementbyId("buttonFor").disabled = true;
    document.getElementbyId("buttonSix").disabled = true;
    document.getElementbyId("buttonSeven").disabled = true;
    document.getElementbyId("buttonNine").disabled = true;
  }
  else if (buttonTree == 'O' && buttonSix == 'O' && buttonNine == 'O') {
    document.getElementById('#message')
    .innerHTML = 'Player O won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("buttonToo").disabled = true;
    document.getElementbyId("buttonFor").disabled = true;
    document.getElementbyId("buttonFive").disabled = true;
    document.getElementbyId("buttonSeven").disabled = true;
    document.getElementbyId("buttonAte").disabled = true;
  }
  else if (button1 =='O' && buttonFive == 'O' && buttonNine == 'O'){
    document.getElementById('#message')
    .innerHTML = 'Player O won this one';
    document.getElementbyId("buttonToo").disabled = true;
    document.getElementbyId("buttonTree").disabled = true;
    document.getElementbyId("buttonFor").disabled = true;
    document.getElementbyId("buttonSix").disabled = true;
    document.getElementbyId("buttonSeven").disabled = true;
    document.getElementbyId("buttonAte").disabled = true;
  }
  else if (buttonTree == 'O' && buttonFive == 'O' && buttonSeven == 'O'){
    document.getElementById('#message')
    .innerHTML = 'Player O won this one';
    document.getElementbyId("button1").disabled = true;
    document.getElementbyId("buttonToo").disabled = true;
    document.getElementbyId("buttonFor").disabled = true;
    document.getElementbyId("buttonSix").disabled = true;
    document.getElementbyId("buttonAte").disabled = true;
    document.getElementbyId("buttonNine").disabled = true;
  }
  // else if ((button1 == 'X' || buttonWon == 'O') && (buttonToo == 'X'
  //       || buttonToo == 'O') && (buttonTree == 'X' || buttonTree == 'O') &&
  //       (buttonFor == 'X' || buttonFor == 'O') && (buttonFive == 'X' ||
  //       buttonFive == 'O') && (buttonSix == 'X' || buttonSix == 'O') &&
  //       (buttonSeven == 'X' || buttonSeven == 'O') && (buttonAte == 'X' ||
  //       buttonAte == 'O') && (buttonNine == 'X' || buttonNine == 'O')) {
  //
  //           document.getElementById('message')
  //               .innerHTML = "Welp, it's a Tie";
  //               alert("Welp, it's a tie!")
  // }
  // else {
    // if () {
    //   document.getElementById('#message')
    //   .innerHTML = "X's turn";
    //   alert ("X's turn"")
    // }
    // else {
    //   document.getElementById('#message')
    //   .innerHTML = "O's turn";
    //   alert ("O's turn";)
    // }
  }
//}
function resetgame (){
  location.reload();
  document.getElementById('#button').value = '';
    document.getElementById("button").value = '';
    document.getElementById("button").value = '';
    document.getElementById("button").value = '';
    document.getElementById("button").value = '';
    document.getElementById("button").value = '';
    document.getElementById("button").value = '';
    document.getElementById("button").value = '';
    document.getElementById("button").value = '';
}

// function markings1() {
//   if () {
//     document.getElementById("#button").value = 'X';
//         document.getElementById("#button").disabled = true;
//         flag = O;
//   }
//   else {
//     document.getElementById("#button").value = "O";
//         document.getElementById("#button").disabled = true;
//         flag = 1;
//   }
// }
//buttonWon.addEventListener("click" thegame());

function playAgainOption() {
  gameActive = true;
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameStatus.textContent = playersTurn();
  document.querySelectorAll('.square').forEach(square => square.textContent = "");


}
