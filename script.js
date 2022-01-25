'use strict';

const rollDice = document.getElementById('roll--dice');
let img = document.getElementById('img');

console.log(img);

// generate randome dice roll
function diceRoll() {
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // display generated dice
  img.src = `/img/dice-${dice}.png`;
  img.style.display = 'block';
}

// generate randome dice roll on rollDice click
rollDice.addEventListener('click', diceRoll);
