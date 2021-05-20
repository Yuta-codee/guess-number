'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 5;

// Main lagi
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'PILIH ANGKA';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundImage = 'none';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  // jika guess lebih dari angka 20 || kurang dari angka 0
  if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent = 'ANGKA TIDAK DALAM RANGE!';
    score--;
  }
  // jika score == 0
  else if (score == 0) {
    document.querySelector('body').style.backgroundColor = '#FF0000';
    document.querySelector('.message').textContent = 'KAMU KALAH';
    alert('YOU LOSE!');
  }
  // jika guess !== randomNumber(dalam range)
  else if (guess != randomNumber) {
    if (guess > randomNumber) {
      document.querySelector('.message').textContent = 'ANGKA TERLALU BESAR!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < 20) {
      document.querySelector('.message').textContent = 'ANGKA TERLALU KECIL!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //jika menang
  else {
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'KAMU MENANG!';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundImage = 'url(cingcong.png)';
  }
});
