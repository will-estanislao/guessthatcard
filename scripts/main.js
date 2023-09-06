/**
 * JS script
 */

/**
 * Animation variables
 */
const cardToAnimate = document.getElementById("guess-card-area").firstElementChild.firstElementChild;


/**
 * Game Related Variables
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

window.onload = GameRestart();


/**
 * Assign Events
 */
for (i = 0; i < cardOptions.length; i++) {
  cardOptions[i].addEventListener("click", (e) => {
    let a = e.target;
    userChoiceAnimation(a);

    if (e.target.tagName == "DIV") {
      a = e.target.firstElementChild;
    }
    checkCardChoice(a);
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
  if (GetHiddenCard() == e.src) {
    ++playerScore;
    gameText.innerHTML = "You guessed correctly!";
    scoreText.innerHTML = "Score: " + playerScore;
  } else {
    gameText.innerHTML = "You guessed incorrectly!";
  }

  cardToAnimate.classList.add("card-flip");

  setTimeout(clearCardAnimations, 3000);
  setTimeout(changeHiddenCard, 4000);

  logStats();
  console.log("Picked card by user: " + e.src + "\nCurrent Hidden Card: " + GetHiddenCard());
}

/**
 * @name changeHiddenCard
 * @description Changes the card the user must guess randomly
 */
function changeHiddenCard() {
  let randomNumber = Math.floor(Math.random() * 5);
  let cardSymbolKeys = Object.keys(Images);
  
  hiddenCard.src = Images[cardSymbolKeys[randomNumber]];

  console.log(
    "New Hidden Card: " + hiddenCard.src
  );
}

function userChoiceAnimation(e) {
  if(e.tagName == "IMG") {
    e = e.parentElement;
  }
  e.classList.add("picked-card");
}

function clearCardAnimations() {
  cardToAnimate.classList.remove("card-flip");
  for (cards = 0; cards < cardOptions.length; cards++) {
    cardOptions[cards].classList.remove("picked-card");
  }
  gameText.innerHTML = "Guess that card!";
}

function GetHiddenCard() {
  hiddenCard = document.getElementById("hidden-symbol");
  let currentHiddenCard = hiddenCard.src;

  return currentHiddenCard;
}

/**
 * @name GameRestart
 * @description For restarting the game fresh. Resets values and
 * picks a new symbol for the hidden card
 */
function GameRestart() {
  // Pick new cards
  changeHiddenCard();

  // Reset Values
  playerScore = 0;
  isCardHidden = true;

  // Change HTML
  scoreText.innerHTML = "Score: " + playerScore;
}

/**
 * @name logStats
 * @description For logging information about game onto console
 */
function logStats() {
  console.log(
    "Current Player Score: " + playerScore + "\nIs Card Hidden? " + isCardHidden +
    "\nHidden Card: " + hiddenCard.src
  );
}

// General Flow:
// Game Start
// - Do a best out of 3 and endless mode
