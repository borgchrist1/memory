'use strict';
let cardImg;
let cardBack;
let value;
let cardId;
let cards = [];
let pair = [];
let cardsFlipped = [];
let checkPair = [];



function creatCard(cards, cardImg, cardBack, value, cardId){
  let card = {};
  card.cardImg = '';
  card.cardBack = '';
  card.value = '';
  card.cardId = '';
  cards.push(card);

}



function numberOfCards(newCards){
  cards = [];
  for (var i = 0; i < newCards; i++) {
    creatCard(cards, cardImg, cardBack, value, cardId);
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
    cards[i].cardBack = 'img/card-back3.png';
    cards[i].cardImg = "img/card-img-" + value + ".jpg";
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
    let imgFront = document.createElement('img');
    let divFlip = document.createElement('div');
    let divCard = document.createElement('div');
    let divFront = document.createElement('div');
    let divBack = document.createElement('div');
    var section = document.querySelector("section");
    imgFront.setAttribute('data-value', cards[i].value);
    imgBack.src = cards[i].cardImg;
    imgFront.src = cards[i].cardBack;
    imgFront.setAttribute('id', cards[i].cardId);
    divFlip.setAttribute('id', "card" + cards[i].cardId);
    //divFront.setAttribute('id', cards[i].cardId);
    divFlip.className = 'flip';
    divCard.className = 'card';
    divFront.className = 'face front';
    divBack.className = 'face back';
    section.appendChild(divFlip);
    divFlip.appendChild(divCard);
    divCard.appendChild(divFront);
    divCard.appendChild(divBack);
    divFront.appendChild(imgFront);
    divBack.appendChild(imgBack);
  }
  game();
}

function game(){
  if(checkPair.length < 2) {
    let playerClicks = document.querySelectorAll('.flip');
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
  let x = event.target.id;
  let y = document.getElementById(x);
  cardsFlipped.push(x);
  console.log(cardsFlipped);
  let z = document.getElementById("card" + x);
  let v = z.querySelector('.card');
  v.className += ' flipped';
  checkPair.push(cardValue);

  if (cardsFlipped.length === 2) {
    if (checkPair[0] !== checkPair[1] ) {
setTimeout(function () {

      let q = document.getElementById("card" + cardsFlipped[0]);
      let w = q.querySelector('.card');
      w.className = 'card';

      let card2 = document.getElementById("card" + cardsFlipped[1]);
      let card12 = card2.querySelector('.card');
      card12.className = 'card';
cardsFlipped = [];
    }, 1000);

    }
if (checkPair[0] === checkPair[1]) {
cardsFlipped = [];
}
  }
  // TODO
  //get id to check that it is not the same card agin
  

  console.log(x);
  console.log('click');
  game();
}


function checkForPair(checkPair){
  //console.log(checkPair);
  if (checkPair[0] === checkPair[1]) {
    console.log('Par');
    let newPair = 'pair';
    pair.push(newPair);
    if (pair.length === 3) {
      gameOver();
    }
  }else {
    console.log('inte par');
  }


}

function gameOver(){
  alert('You won!');
  //TODO
  //erase old gameboard
  //New game function

}

numberOfCards(6);
