'use strict';
const rand = () => Math.floor(Math.random() * 20) + 1;
let randomNum = rand();

console.log(randomNum);
let score = 20;
let highScore = 0;
const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', () => {
  let inputValue = document.querySelector('.guess').value;
  if (inputValue === '') {
    document.querySelector('.message').textContent = 'Please enter a number.';
  } else if (Number(inputValue) > randomNum) {
    document.querySelector('.message').textContent = 'Too high';
    document.querySelector('.score').textContent = score - 1;
    score -= 1;
  } else if (Number(inputValue) < randomNum) {
    document.querySelector('.message').textContent = 'Too low';
    document.querySelector('.score').textContent = score - 1;
    score -= 1;
  } else {
    document.querySelector('.message').textContent = 'Right';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.number').textContent = randomNum;
    }
  }
});

const again = document.querySelector('.again');
again.addEventListener('click', () => {
  let msg = document.querySelector('.message');
  let guessNum = document.querySelector('.guess');
  let number = document.querySelector('.number');
  let sc = document.querySelector('.score');
  msg.textContent = 'Start guessing...';
  guessNum.value = guessNum.defaultValue;
  number.textContent = '?';
  score = 20;
  sc.textContent = score;
  randomNum = rand();
  console.log(randomNum);
});
