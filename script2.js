'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

//FOR DISPLAYING MESSAGE MULTIPLE TIMES IN OUR CODE (REFACTORING AND CONDENSING THE CODE!)
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage(`No Input!`);

    //WHEN THE GUESS IS RIGHT
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#2be622`;

    document.querySelector(`.number`).style.width = `30rem`;

    //HIGH SCORE

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //WHEN THE GUESS IS NOT RIGHT
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //WHEN THE GUESS IS TOO HIGH AND TOO LOW
      displayMessage(guess > secretNumber ? `Too High!` : `Too Low!`);

      score--;

      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You Lost!`);

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
  displayMessage(`Start guessing...`);

  document.querySelector(`.number`).textContent = `?`;

  document.querySelector(`.score`).textContent = score;

  document.querySelector(`.guess`).value = ``;

  document.querySelector(`body`).style.backgroundColor = `#222`;

  document.querySelector(`.number`).style.width = `15rem`;
});
