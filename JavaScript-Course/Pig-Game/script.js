'use strict';
// Selesting elments
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const Player0 = document.querySelector('.player--0');
const Player1 = document.querySelector('.player--1');
// Starting Conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Rolling The Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Genrate random roll number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Displlay The Rolling Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `imgs/dice-${dice}.png`;
    // Check For Rolled 1 If TRue Switch The Player
    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // activePlayer === 0
      //   ? (current0.textContent = currentScore)
      //   : (current1.textContent = currentScore);
    } else {
      // activePlayer == 0 ? (current0.textContent = 0) : (current1.textContent = 0);
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = Number(!activePlayer);
      // activePlayer === 0? activePlayer = 1 : activePlayer = 0;
      // console.log(activePlayer);
      currentScore = 0;
      Player0.classList.toggle('player--active');
      Player1.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // hold th current player score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // check the Winner
    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      // remove the rolling dice
      diceEl.classList.add('hidden');
    } else {
      // switch player
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = Number(!activePlayer);
      currentScore = 0;
      Player0.classList.toggle('player--active');
      Player1.classList.toggle('player--active');
    }
  }
});

// reset the game
btnNew.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  Player0.classList.remove('player--winner');
  Player1.classList.remove('player--winner');
  Player0.classList.add('player--active');
  Player1.classList.remove('player--active');
  diceEl.classList.add('hidden');

  score[0] = 0;
  score[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
});
