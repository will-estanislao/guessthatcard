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
let gameText = document.getElementById("card-reveal");
let scoreText = document.getElementById("player-score");
let hiddenCard = document.getElementById("hidden-symbol");

let isCardHidden = true;
let playerScore = 0;

/**
 * Assign Events
 */
for (i = 0; i < cardOptions.length; i++) {
  cardOptions[i].addEventListener("click", (e) => {
    if (e.target.tagName == "DIV") {
      checkCardChoice(e.target.firstElementChild);
    } else {
      checkCardChoice(e.target);
    }
  });
}

/**
 * Functions
 */

/**
 * @name checkCardChoice
 * @description Checks if the card the user picked is correct and informs
 * them. If it is correct, the user's score will go up. Then it changes
 * the card's symbol randomly.
 * @param {Element} e
 */
function checkCardChoice(e) {
  if (hiddenCard.src == e.src) {
    ++playerScore;
    gameText.innerHTML = "You guessed correctly!";
    scoreText.innerHTML = "Score: " + playerScore;
  } else {
    gameText.innerHTML = "You guessed incorrectly!";
  }

  // Wait 15s - 30s before randomizing card
  setTimeout(changeHiddenCard, 3000);
  logStats();
  console.log(e.src);
  console.log(hiddenCard.src);
}

/**
 * @name changeHiddenCard
 * @description Changes the card the user must guess randomly
 */
function changeHiddenCard() {
  let randomNumber = Math.floor(Math.random() * 5);
  let cardSymbolKeys = Object.keys(Images);

  // Do animation flip of card
  gameText.innerHTML = "Guess that card!";

  hiddenCard.src = Images[cardSymbolKeys[randomNumber]];

  console.log(
    "Random Number: " + randomNumber + "\nCard Symbol Key: " + cardSymbolKeys
  );
}

/**
 * @name gameRestart
 * @description For restarting the game fresh. Resets values and
 * picks a new symbol for the hidden card
 */
function gameRestart() {
  // Reset Values
  playerScore = 0;
  isCardHidden = true;

  // Change HTML
  scoreText.innerHTML = "Score: " + playerScore;

  // Flip card over to backside

  // Pick new cards
  changeHiddenCard();
}

/**
 * @name logStats
 * @description For logging information about game onto console
 */
function logStats() {
  console.log(
    "Current Player Score: " + playerScore + "\nIs Card Hidden? " + isCardHidden
  );
}

// General Flow:
// Game Start
// - Do a best out of 3 and endless mode
