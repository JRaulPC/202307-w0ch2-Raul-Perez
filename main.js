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

  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      newDeck.push(`${rank} de ${suit}`);
    });
  });

  return newDeck;
};

const getRandomCard = (gameDeck) => {
  const randomCard = gameDeck[Math.floor(Math.random() * gameDeck.length)];

  return randomCard;
};

const playGame = () => {
  const deckToUse = createCardsDeck();
  const gameCard = getRandomCard(deckToUse);

  let shownCard = document.querySelector(".shown__card");

  shownCard.textContent = gameCard;

  const accesGame = () => {
    const accesButton = document.querySelector(".start__button");
    const mainScreen = document.querySelector(".welcome__screen");
    const playingScreen = document.querySelector(".main__game_screen");

    accesButton.addEventListener("click", () => {
      mainScreen.classList.add("hidden");
    });

    accesButton.addEventListener("click", () => {
      playingScreen.classList.remove("hidden");
    });
  };

  accesGame();
  //Comprobar luego que printee en la pantalla
  return `Esta es tu carta: ${shownCard}`;
};

playGame();
