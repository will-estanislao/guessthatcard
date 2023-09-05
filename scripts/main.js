/**
 * JS script
 */

const Images = {
  Cross: "images/card-symbols/cross.jpg",
  Circle: "images/card-symbols/circle.jpg",
  Wave: "images/card-symbols/wave.jpg",
  Square: "images/card-symbols/square.jpg",
  Star: "images/card-symbols/star.jpg",
};

const userHand = document.getElementById("user-card-choices");
const cardOptions = userHand.getElementsByClassName("zener-card");
let cardToGuess = document.getElementById("hidden-card");
let gameText = document.getElementById("card-reveal");
let scoreText = document.getElementById("player-score");
let hiddenCard = document.getElementById("hidden-symbol");

let isCardHidden = true;
let playerScore = 0;

for (i = 0; i < cardOptions.length; i++) {
  cardOptions[i].addEventListener("click", (e) => {
    checkCardChoice(e.target);
  });
}

// User picks a card
// Card is checked against current
function checkCardChoice(e) {
  if (hiddenCard.src == e.src) {
    ++playerScore;
    isCardHidden = false;

    gameText.innerHTML = "You guessed correctly!";
    scoreText.innerHTML = "Score: " + playerScore;
  } else {
    gameText.innerHTML = "You guessed incorrectly!";
    isCardHidden = false;
  }

  // Do animation flip of card
  // Wait 15s - 30s before randomizing card
  logStats();
  console.log(e.src);
  console.log(hiddenCard.src);

  changeHiddenCard();
}

function logStats() {
  console.log("Current Player Score: " + playerScore);
  console.log("Is Card Hidden? " + isCardHidden);
}

function changeHiddenCard() {
  let randomNumber = Math.floor(Math.random() * 5);
  let cardSymbolKeys = Object.keys(Images);
  hiddenCard.src = Images[cardSymbolKeys[randomNumber]];

  console.log("Random Number: " + randomNumber);
  console.log("Card Symbol Key: " + cardSymbolKeys);
  console.log(hiddenCard.src);
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
