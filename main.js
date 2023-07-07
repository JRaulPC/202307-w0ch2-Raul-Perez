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
      newDeck.push(`${rank}${suit}`);
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
  let visibleCard = getRandomCard(deckToUse);
  let cardToGuess = getRandomCard(deckToUse);

  const resetGame = () => {
    greaterThanButton.disabled = false;
    smallerThanButton.disabled = false;
    resultMessage.textContent = "";
    hiddenCard.textContent = "?";
    shownCard.textContent = visibleCard;
    visibleCard = getRandomCard(deckToUse);
    cardToGuess = getRandomCard(deckToUse);
  };

  const resultMessage = document.querySelector(".main__game__result");

  let hiddenCard = document.querySelector(".card__to__guess");
  let shownCard = document.querySelector(".shown__card");

  shownCard.textContent = visibleCard;

  let greaterThanButton = document.querySelector(".greater__than");
  let smallerThanButton = document.querySelector(".smaller__than");

  greaterThanButton.addEventListener("click", () => {
    hiddenCard.textContent = cardToGuess;
    greaterThanButton.disabled = true;
    smallerThanButton.disabled = true;

    if (deckToUse.indexOf(cardToGuess) > deckToUse.indexOf(visibleCard)) {
      resultMessage.textContent = "Has Ganado";
    } else {
      resultMessage.textContent = "Has Perdido";
    }

    setTimeout(() => {
      resetGame();
    }, 1500);
  });

  smallerThanButton.addEventListener("click", () => {
    hiddenCard.textContent = cardToGuess;
    greaterThanButton.disabled = true;
    smallerThanButton.disabled = true;

    if (deckToUse.indexOf(cardToGuess) < deckToUse.indexOf(visibleCard)) {
      resultMessage.textContent = "Has Ganado";
    } else {
      resultMessage.textContent = "Has Perdido";
    }

    setTimeout(() => {
      resetGame();
    }, 1500);
  });
};

playGame();
