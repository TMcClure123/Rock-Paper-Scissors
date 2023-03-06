const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Invalid input");
    return "Check your input";
  }
};

function getComputerChoice() {
  const choiceVariable = Math.floor(Math.random() * 3);
  switch (choiceVariable) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
let userScore = 0;
let computerScore = 0;

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
  return document.getElementById("result").innerHTML = "You tied with the computer!"; // all of the follwoing print out the results for the rps game.
}

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      document.getElementById('computerScore').innerHTML = computerScore;
      return document.getElementById("result").innerHTML = "The computer won!";
      //change HTML
    } else if (computerChoice === "scissors") {
      userScore++;
      document.getElementById('userScore').innerHTML = userScore;
      return document.getElementById("result").innerHTML = "You won!";
    } 
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      userScore++;
      document.getElementById('userScore').innerHTML = userScore;
      return document.getElementById("result").innerHTML = "You won!"; 
    } else if (computerChoice === "scissors") {
      computerScore++;
      document.getElementById('computerScore').innerHTML = computerScore;
      return document.getElementById("result").innerHTML = "The computer won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      document.getElementById('computerScore').innerHTML = computerScore;
      return document.getElementById("result").innerHTML = "The computer won!";
    } else if (computerChoice === "paper") {
      userScore++;
      document.getElementById('userScore').innerHTML = userScore;
      return document.getElementById("result").innerHTML = "You won!";
    }
  }
  
}

const resetGame = () => {
userScore = 0;
computerScore = 0;
document.getElementById("userScore").innerHTML= userScore;
document.getElementById("computerScore").innerHTML= computerScore; //this resets the score to 0
}

function playGame(choice) {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  console.log("User choice is: " + userChoice);
  console.log("Computer choice is: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice)); // this function runs the game and prints the choices
};
