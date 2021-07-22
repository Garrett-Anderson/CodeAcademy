let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//step 3
let generateTarget = (min, max) => {
  return Math.floor(Math.random() * 10);
};

// step 4
let compareGuesses = (humanGuess, computerGuess, secretNumber) => {
   const humanDifference = Math.abs(secretNumber - humanGuess);
    const computerDifference = Math.abs(secretNumber - computerGuess);
    return humanDifference <= computerDifference;
};

// step 5
let updateScore = winner => {
  if  (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

// step 6
let advanceRound = () => {
  currentRoundNumber += 1
};

console.log(generateTarget())
console.log(compareGuesses(6, 4, 6))
