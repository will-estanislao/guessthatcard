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

/**
 * Assign Events
 */
for (i = 0; i < cardOptions.length; i++) {
  cardOptions[i].addEventListener("click", (e) => {
    userChoiceAnimation(e.target);

    if (e.target.tagName == "DIV") {
      e = e.target.firstElementChild;
    }
    checkCardChoice(e);
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

  cardToAnimate.classList.add("card-flip");
  setTimeout(changeHiddenCard, 4000);

  logStats();

  console.log(hiddenCard.src);
}

/**
 * @name changeHiddenCard
 * @description Changes the card the user must guess randomly
 */
function changeHiddenCard() {
  let randomNumber = Math.floor(Math.random() * 5);
  let cardSymbolKeys = Object.keys(Images);
  
  clearCardAnimations();

  setTimeout(function(){  hiddenCard.src = Images[cardSymbolKeys[randomNumber]];
  }, 1000);

  console.log(
    "Random Number: " + randomNumber + "\nCard Symbol Key: " + cardSymbolKeys
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
