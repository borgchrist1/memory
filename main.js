'use strict';
let cardImg;
let cardBack;
let pair;
let cards = [];


function creatCard(cardImg, cardBack, pair){
  let card = {};
  card.cardImg = '';
  card.cardBack = 'back';
  card.pair = false;
  cards.push(card);

}



function numberOfCards(newCards){
  for (var i = 0; i < newCards; i++) {
    creatCard(cardImg, cardBack, pair);
  }
  addValues(cards, newCards);
}



function addValues(cards, newCards){
  let value = 0;
  for (var i = 0; i < cards.length; i++) {
    value++;
    if (value > newCards/2) {
      value = 1;
    }
    cards[i].cardImg = value;

  }
  mixCards(cards);
}

function mixCards(cards){
  for (let i = cards.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [cards[i - 1], cards[j]] = [cards[j], cards[i - 1]];
  }

}


function putCardsOnTable(cards){

}

function checkForPair(){


}

numberOfCards(6);
console.log(cards);
