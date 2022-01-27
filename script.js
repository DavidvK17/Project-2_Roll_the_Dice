'use strict';

// setting active player to 0 for me to be able to toggle between player and score clasees
let activePlayer = 0;

const rollDice = document.getElementById('roll--dice');
let img = document.getElementById('img');
let score = 0;
let displayScore = document.getElementById(`score--0`);

const holdScore = document.getElementById('hold');
let displayCurScore = document.getElementById(`current--score--0`);

let curPlayer = document.getElementsByClassName('player--container--0')[0];

const playing = curPlayer.classList.contains('is--active');

let scores = [0, 0];
let curScore = 0;

const newGame = document.getElementById('new--game');

// generate randome dice roll
function diceRoll() {
  const dice = Math.trunc(Math.random() * 6 + 1);
  // display generated dice
  img.src = `/img/dice-${dice}.png`;
  img.style.display = 'block';

  if (playing && dice !== 1) {
    // update player0 score
    score += dice;
    displayScore.textContent = `${score}`;
  } else {
    switchPlayer();
  }
}

function updateCurScore() {
  // save current score for next round
  scores[activePlayer] += score;
  displayCurScore.textContent = `${scores[activePlayer]}`;
  console.log(curPlayer);

  if (playing && scores[activePlayer] >= 10) {
    curPlayer.classList.add('winner');
    rollDice.disabled = true;
    holdScore.disabled = true;
  } else {
    score = 0;
    displayScore.textContent = 0;
    img.style.display = 'none';
    switchPlayer();
  }
}

function switchPlayer() {
  score = 0;
  displayScore.textContent = `${score}`;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  displayScore = document.getElementById(`score--${activePlayer}`);
  displayCurScore = document.getElementById(`current--score--${activePlayer}`);

  if (curPlayer.classList.contains('is--active')) {
    curPlayer.classList.remove('is--active');
    curPlayer = document.getElementsByClassName(
      `player--container--${activePlayer}`
    )[0];
    curPlayer.classList.add('is--active');
  }
}

// generate randome dice roll on rollDice click
rollDice.addEventListener('click', diceRoll);

// update player0 current score on hold
holdScore.addEventListener('click', updateCurScore);

// reset css and declare player 1 active player on new game
newGame.addEventListener('click', function() {
  activePlayer = 0;
  scores = [0, 0];
  score = 0;
  displayScore.textContent = score;
  displayCurScore = document.getElementById(`current--score--0`);
  curScore = 0;
  displayCurScore.textContent = curScore;
  displayCurScore = document.getElementById(`current--score--1`);
  curScore = 0;
  displayCurScore.textContent = curScore;
  img.style.display = 'none';

  curPlayer = document.getElementsByClassName('player--container--0')[0];
  displayScore = document.getElementById(`score--${activePlayer}`);
  displayCurScore = document.getElementById(`current--score--0`);

  rollDice.disabled = false;
  holdScore.disabled = false;

  document
    .getElementsByClassName('player--container--0')[0]
    .classList.remove('winner');
  document
    .getElementsByClassName('player--container--1')[0]
    .classList.remove('winner');

  document
    .getElementsByClassName(`player--container--0`)[0]
    .classList.add('is--active');
  document
    .getElementsByClassName('player--container--1')[0]
    .classList.remove('is--active');
});
