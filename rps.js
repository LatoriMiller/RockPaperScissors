var userChoice = "none";
var computerChoice = "none";
winMessage = document.getElementById("winner");
// could create a Message display function -- could use case statement
// var displayWinner = function(result){if (result == "tie") {  winMessage.innerHTML = "We have ourselves a tie!";} elseif(result == "userWin"){winMessage.innerHTML = "You won!";} else{winMessage.innerHTML = "Computer won this round!";}};

function setComputerChoice(){
  var num = Math.random();
  if (num < 0.34) {
  	computerChoice = "rock";
  } else if(num <= 0.67) {
  	computerChoice = "paper";
  } else {
  	computerChoice = "scissors";
  };
};


function displayChoices(){
  var message = document.getElementById("user");
  message.innerHTML = "you: " + userChoice;
  var computerUpdate = document.getElementById("computer");
  computerUpdate.innerHTML = "computer:  " + computerChoice;
}

function rockChoice(){
  setComputerChoice();
  userChoice = "rock";
  displayChoices();
  console.log("You Chose: " + userChoice);
  console.log("Computer Chose: " + computerChoice);
  compare(userChoice, computerChoice);
}
function paperChoice(){
  setComputerChoice();
  userChoice = "paper";
  displayChoices();
  console.log("You Chose: " + userChoice);
  console.log("Computer Chose: " + computerChoice);
  compare(userChoice, computerChoice);
}
function scissorsChoice(){
  setComputerChoice();
  userChoice = "scissors";
  displayChoices();
  console.log("You Chose: "+ userChoice);
  console.log("Computer Chose: " + computerChoice);
  compare(userChoice, computerChoice);
}

console.log("Your choice: " + userChoice)
console.log("Computer's choice: " + computerChoice)

var compare = function(choice1, choice2){
  if(choice1 === choice2){
    console.log( "The result is a tie!");
    winMessage.innerHTML = "We have ourselves a tie!"
  }
  if(choice1 === "rock"){
    switch (choice2) {
      case "paper":
        winMessage.innerHTML = "Computer won this round!"
        console.log('Computer wins!');
        break;
      case "scissors":
        winMessage.innerHTML = "You won!"
        console.log("You win!");
      };
    };
    if(choice1 === "paper"){
      switch (choice2) {
        case "scissors":
          winMessage.innerHTML = "Computer won this round!"
          console.log('Computer wins!');
          break;
        case "rock":
          winMessage.innerHTML = "Congratulations, You won!"
          console.log("You win!");
      };
    };
    if(choice1 === "scissors"){
      switch (choice2) {
        case "rock":
          winMessage.innerHTML = "Computer Wins!"
          console.log('Computer wins!');
          break;
        case "paper":
          winMessage.innerHTML = "Congratulations, You won!"
          console.log("You win!");
      };
    };
};
