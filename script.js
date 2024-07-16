'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector(`.message`).textContent = `No Input!`;

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `Correct Number!`;

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#2be622`;

    document.querySelector(`.number`).style.width = `30rem`;

    //HIGH SCORE

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //WHEN THE GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too High!`;

      score--;

      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You Lost!`;

      document.querySelector(`.score`).textContent = 0;
    }

    //WHEN THE GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low!`;

      score--;

      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You Lost!`;

      document.querySelector(`.score`).textContent = 0;
    }
  }
});

//AGAIN BUTTON

document.querySelector(`.again`).addEventListener(`click`, function () {
  //RESTORING SCORE VALUE
  score = 20;
  //RETORING SECRET NUMBER
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //RESTORING MESSAGE
  document.querySelector(`.message`).textContent = `Start guessing...`;

  document.querySelector(`.number`).textContent = `?`;

  document.querySelector(`.score`).textContent = score;

  document.querySelector(`.guess`).value = ``;

  document.querySelector(`body`).style.backgroundColor = `#222`;

  document.querySelector(`.number`).style.width = `15rem`;
});
