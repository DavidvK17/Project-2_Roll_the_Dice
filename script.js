'use strict';

const rollDice = document.getElementById('roll--dice');
let img = document.getElementById('img');
let score0 = 0;
let displayScore0 = document.getElementById('score--0');

const holdScore = document.getElementById('hold');
let curScore0 = 0;
let displayCurScore0 = document.getElementById('current--score--0');

// generate randome dice roll
function diceRoll() {
  const dice = Math.trunc(Math.random() * 6 + 1);

  // display generated dice
  img.src = `/img/dice-${dice}.png`;
  img.style.display = 'block';

  // update player0 score
  score0 += dice;
  displayScore0.textContent = `${score0}`;
}

function updateCurScore() {
  curScore0 += score0;
  displayCurScore0.textContent = `${curScore0}`;
  console.log(curScore0);
}

// generate randome dice roll on rollDice click
rollDice.addEventListener('click', diceRoll);

// update player0 current score on hold
holdScore.addEventListener('click', updateCurScore);
