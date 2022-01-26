'use strict';

const rollDice = document.getElementById('roll--dice');
let img = document.getElementById('img');
let score0 = 0;
let displayScore0 = document.getElementById('score--0');
let score1 = 0;
let displayScore1 = document.getElementById('score--1');

const holdScore = document.getElementById('hold');
let curScore0 = 0;
let displayCurScore0 = document.getElementById('current--score--0');

let curScore1 = 0;
let displayCurScore = document.getElementById('current--score--1');

const curPlayer0 = document.getElementsByClassName('player--container--0')[0];
const curPlayer1 = document.getElementsByClassName('player--container--1')[0];

const playing = curPlayer0.classList.contains('is--active');

// generate randome dice roll
function diceRoll() {
  const dice = Math.trunc(Math.random() * 6 + 1);

  // display generated dice
  img.src = `/img/dice-${dice}.png`;
  img.style.display = 'block';

  if (playing && dice !== 1) {
    // update player0 score
    score0 += dice;
    displayScore0.textContent = `${score0}`;
  } else {
    switchPlayer();
  }
}

function updateCurScore() {
  curScore0 += score0;
  displayCurScore0.textContent = `${curScore0}`;
  score0 = 0;
  displayScore0.textContent = 0;
  img.style.display = 'none';

  switchPlayer();
}

function switchPlayer() {
  if (playing) {
    curPlayer0.classList.remove('is--active');
    curPlayer1.classList.add('is--active');
  } else {
    curPlayer0.classList.add('is--active');
    curPlayer1.classList.remove('is--active');
  }

  score0 = 0;
  displayScore0.textContent = `${score0}`;
}

// generate randome dice roll on rollDice click
rollDice.addEventListener('click', diceRoll);

// update player0 current score on hold
holdScore.addEventListener('click', updateCurScore);
