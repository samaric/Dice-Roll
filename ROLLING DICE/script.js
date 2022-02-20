'use strict';

// Selecting elements
const score0El = document.querrySelector('#score--0');
const score1El = document.getElementById(' score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querrySelector('.dice');
const btnNew = document.querrySelector('.btn--new');
const btnRoll = document.querrySelector('.btn--roll');
const btnHold = document.querrySelector('.btn--hold');


// Starting Conditions
score0El.textContent = 0;
score0El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
})

diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;

if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
} else {

}