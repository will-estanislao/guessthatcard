/**
 * JS script
 */

const userHand = document.getElementById("user-card-choices");
const cardOptions = userHand.getElementsByClassName("zener-card");
let cardToGuess = document.getElementById("hidden-card");
let gameText = document.getElementById("card-reveal");
let scoreText = document.getElementById("player-score");

let isCardHidden = true;
let playerScore = 0;
/*
for (i = 0; i < cardOptions.length; i++) {
  cardOptions[i].addEventListener("click", (e) => {
    checkCardChoice(e.target);
  });
}
*/

const checkCardChoice2 = (e) => {
  let hiddenCard = document.getElementById("hidden-symbol");
  if (hiddenCard.src == e.target.src) {
    ++playerScore;
    isCardHidden = false;

    // Do animation flip
    gameText.innerHTML = "You guessed correctly!";
    scoreText.innerHTML = "Score: " + playerScore;
  } else {
    gameText.innerHTML = "You guessed incorrectly!";
    isCardHidden = false;
  }
  logStats();
  console.log(e.target.src);
  console.log(hiddenCard.src);
};

for (let choice of cardOptions) {
  choice.addEventListener("click", checkCardChoice2);
}

// User picks a card
// Card is checked against current
function checkCardChoice(e) {
  let hiddenCard = document.getElementById("hidden-symbol");
  if (hiddenCard.src == e.src) {
    ++playerScore;
    isCardHidden = false;

    // Do animation flip
    gameText.innerHTML = "You guessed correctly!";
    scoreText.innerHTML = "Score: " + playerScore;
  } else {
    gameText.innerHTML = "You guessed incorrectly!";
    isCardHidden = false;
  }
  logStats();
  console.log(e.src);
  console.log(hiddenCard.src);
}

function logStats() {
  console.log("Current Player Score: " + playerScore);
  console.log("Is Card Hidden? " + isCardHidden);
}

// Event
// Check cards

// Pick random card to guess
// Flip card
// Reset score to zero + add score

// OnClick event applied to all user choice cards

// General Flow:
// Game Start
// - Reset Score 0
// - Pick random card to be hidden
// - Hide card - set to true
// - Re-assign event to cards?
// - User picks choice, choice is checked against hidden card
// - If right, add score & notify user, if wrong notify user do not add score
// - Continue on after 15s-30s
// - Do a best out of 3 and endless mode
