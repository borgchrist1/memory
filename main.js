'use strict';
let cardImg;
let cardBack;
let pair;
let cards = [];


function creatCard(cardImg, cardBack, pair){
  let card = {};
  card.cardImg = '';
  card.cardBack = 'img/card-back3.png';
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
  putCardsOnTable(cards);
}


function putCardsOnTable(cards){
  for (var i = 0; i < cards.length; i++) {
    let imgBack = document.createElement('img');
    var section = document.querySelector("section");
    imgBack.src = cards[i].cardBack;
    section.appendChild(imgBack);
  }

}

function game(){
  var x = document.querySelectorAll('img');
  for (var i = 0; i < x.length; i++) {
  x[i].addEventListener('click', function(event) {
    console.log('bild');
    //skapa array. med 2 platser. checkForPair(). om par spara i ny array.
    //om array full spel slut annars forsatt.
      });
  }
}

function checkForPair(array){

}

numberOfCards(6);
