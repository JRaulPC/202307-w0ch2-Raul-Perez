const createCardsDeck = () => {
  const suits = ["Corazones", "Bastos", "Espadas" ,"Diamantes"];
  const ranks = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
  let newDeck = [];

  suits.forEach(suit => {
    ranks.forEach(rank => {
      newDeck.push(`${rank} de ${suit}`) 
  });
});

  return newDeck
};


const getRandomCard = (gameDeck) => {

  const randomCard = gameDeck[Math.floor(Math.random() * gameDeck.length)];

  return randomCard
};


const playGame = () => {
  const deckToUse = createCardsDeck();
  const randomCard = getRandomCard(deckToUse);


  return randomCard
};

playGame()
