'use strict';
let cardImg;
let cardBack;
let value;
let cardId;
let cards = [];
let pair = [];
let checkPair = [];



function creatCard(cardImg, cardBack, value, cardId){
  let card = {};
  card.cardImg = '';
  card.cardBack = '';
  card.value = '';
  card.cardId = '';
  cards.push(card);

}



function numberOfCards(newCards){
  for (var i = 0; i < newCards; i++) {
    creatCard(cardImg, cardBack, value, cardId);
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
    cards[i].value = value;
    cards[i].cardId = i+1;
    cards[i].cardBack = 'img/card-back3.png'
    cards[i].cardImg = "img/card-img-" + value + "jpg"
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
    let div = document.createElement('div');
    var section = document.querySelector("section");
    imgBack.setAttribute('data-value', cards[i].value);
    imgBack.src = cards[i].cardBack;
    imgBack.setAttribute('id', cards[i].cardId);
    section.appendChild(imgBack);
  }
  game();
}

function game(){
 if(checkPair.length < 2) {
  let playerClicks = document.querySelectorAll('img');
  playerClicks.forEach(function(playerClick){
  playerClick.addEventListener('click', onClick);
  });
} else {
  checkForPair(checkPair);
  checkPair = [];
}

}


function onClick(event){
let cardValue = event.toElement.dataset.value;
//console.log(event);
let x = event.target.id;
//let y = document.getElementById(x);
//y.src = '#';
checkPair.push(cardValue);
console.log(x);
console.log('click');
game();
}


function checkForPair(checkPair){
console.log(checkPair);
if (checkPair[0] === checkPair[1]) {
  console.log('Par');
  let newPair = 'pair';
  pair.push(newPair);
  if (pair.length === 3) {
    alert('You won!');
  }
}else {
  console.log('inte par');
}


}



numberOfCards(6);
