console.log('Lodash is loaded:', typeof _ !== 'undefined');

const player1 = {
  name: 'bob',
  hand: [],
  points: 0
};

const player2 = {
  name: 'sam',
  hand: [],
  points: 0
};

const player3 = {
  name: 'jack',
  hand: [],
  points: 0
};

const player4 = {
  name: 'jill',
  hand: [],
  points: 0
};

const players = [player1, player2, player3, player4];

const deck = [];

const rank = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const value = [11, 10, 10, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2];
const suit = ['spades', 'hearts', 'diamonds', 'clubs'];

for (let i = 0; i < suit.length; i++) {
  for (let j = 0; j < rank.length; j++) {
    const card = { rank: rank[j], suit: suit[i], value: value[j] };
    deck.push(card);
  }
}

function shuffle() {
  return _.random(0, (deck.length - 1));
}

function play(playersArray) {
  let highestTotal = 0;
  let winner;
  for (let i = 0; i < playersArray.length; i++) {
    for (let j = 0; j < 2; j++) {
      const card = shuffle();
      playersArray[i].hand.push(deck[card]);
      playersArray[i].points += deck[card].value;
      _.remove(deck, deck[card]);
      if (playersArray[i].points > highestTotal) {
        highestTotal = playersArray[i].points;
        winner = playersArray[i].name;
      }
    }
  }
  return winner;
}

console.log('The winner is', play(players));
