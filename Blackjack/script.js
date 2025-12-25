let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Mansoor",
  chips: 145,
};

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": £" + player.chips;

function startGame() {
  isAlive = true;
  hasBlackjack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  updateGameState();
}

function getRandomCard() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card === 1) {
    return 11;
  } else if (card > 10) {
    return 10;
  } else {
    return card;
  }
}

function updateGameState() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You win";
    hasBlackjack = true;
  } else {
    message = "You lose";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function drawCard() {
  if (isAlive && !hasBlackjack) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    updateGameState();
  }
}
