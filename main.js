const createCardsDeck = () => {
  const suits = ["♥️", "♣️", "♠️", "♦️"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  let newDeck = [];

  ranks.forEach((rank) => {
    suits.forEach((suit) => {
      newDeck.push(`${rank} de ${suit}`);
    });
  });

  return newDeck;
};

const getRandomCard = (gameDeck) => {
  const randomCard = gameDeck[Math.floor(Math.random() * gameDeck.length)];

  return randomCard;
};

const accesGame = () => {
  const accesButton = document.querySelector(".start__button");
  const mainScreen = document.querySelector(".welcome__screen");
  const playingScreen = document.querySelector(".main__game_screen");

  accesButton.addEventListener("click", () => {
    mainScreen.classList.add("hidden");
    playingScreen.classList.remove("hidden");
  });
};

const playGame = () => {
  accesGame();
  const deckToUse = createCardsDeck();
  const visibleCard = getRandomCard(deckToUse);
  const cardToGuess = getRandomCard(deckToUse);

  let hiddenCard = document.querySelector(".card__to__guess");
  let shownCard = document.querySelector(".shown__card");

  shownCard.textContent = visibleCard;

  let greaterThanButton = document.querySelector(".greater__than");
  let smallerThanButton = document.querySelector(".smaller__than");

  greaterThanButton.addEventListener("click", () => {
    hiddenCard.textContent = cardToGuess;
    if (deckToUse.indexOf(cardToGuess) > deckToUse.indexOf(visibleCard)) {
      console.log("Has ganado");
    } else {
      console.log("Has perdido!");
    }
  });

  smallerThanButton.addEventListener("click", () => {
    hiddenCard.textContent = cardToGuess;
    if (deckToUse.indexOf(cardToGuess) < deckToUse.indexOf(visibleCard)) {
      console.log("Has Ganado");
    } else {
      console.log("Has Perdido");
    }
  });
};

playGame();
