'use strict';

// setting active player to 0 for me to be able to toggle between player and score clasees
let activePlayer = 0;

const rollDice = document.getElementById('roll--dice');
let img = document.getElementById('img');
let score = 0;
let displayScore = document.getElementById(`score--0`);

const holdScore = document.getElementById('hold');
let scores = [0, 0];
let displayCurScore = document.getElementById(`current--score--0`);

let curPlayer = document.getElementsByClassName('player--container--0')[0];

const playing = curPlayer.classList.contains('is--active');

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
  let curScore = scores[activePlayer];
  curScore += score;
  displayCurScore.textContent = `${curScore}`;
  score = 0;
  displayScore.textContent = 0;
  img.style.display = 'none';
  switchPlayer();
}

function switchPlayer() {
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

  score = 0;
  displayScore.textContent = `${score}`;
}

// generate randome dice roll on rollDice click
rollDice.addEventListener('click', diceRoll);

// update player0 current score on hold
holdScore.addEventListener('click', updateCurScore);
