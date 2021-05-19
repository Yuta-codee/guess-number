'use strict';

const randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 5;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (guess > 20) {
    document.querySelector('.message').textContent = 'ANGKA TIDAK DALAM RANGE!';
  } else if (score == 0) {
    document.querySelector('body').style.backgroundColor = '#FF0000';
    document.querySelector('.message').textContent = 'KAMU KALAH';

    alert('YOU LOSE!');
  } else if (guess != randomNumber) {
    if (guess > randomNumber) {
      document.querySelector('.message').textContent = 'ANGKA TERLALU BESAR!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < 20) {
      document.querySelector('.message').textContent = 'ANGKA TERLALU KECIL!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'KAMU MENANG!';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundImage = 'url(cingcong.png)';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'PILIH ANGKA';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '5';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 5;
});
