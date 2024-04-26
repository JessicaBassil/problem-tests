/** PROBLEM 2 : PROBABILITY GAME CONSTANTS **/
const suits = {
  Diamonds: "Diamonds",
  Hearts: "Hearts",
  Spades: "Spades",
  Clubs: "Clubs",
  Joker: "Joker",
};

const companions = {
  Lion: "Lion",
  Fox: "Fox",
  Parrot: "Parrot",
  Seal: "Seal",
  Snake: "Snake",
};

const fruits = {
  Apple: "Apple",
  Bananas: "Bananas",
  Mango: "Mango",
  Watermelon: "Watermelon",
  Papaya: "Papaya",
};

// keys of each obj of the csv of prediction
const suit = "Card Suit";
const companion = "Animal Name";
const fruit = "Fruit";
const result = "Result";

// Possible Results
const results = {
  fail: "False",
  success: "True",
};

export { companions, fruits, suits, results, suit, companion, fruit, result };
