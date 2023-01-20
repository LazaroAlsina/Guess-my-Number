"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "❤ Correct number!";

document.querySelector(".number").textContent = 15;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 25;
*/

let guessNumber = Math.floor(Math.random() * 20 + 1);
document.querySelector(".number").textContent = guessNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guessNumber === guess) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
  } else if (guessNumber < guess) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Wrong number, Go lower!";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else if (score === 1) {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "You lost!";
    }
  } else if (guessNumber > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Wrong number, Go higher!";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else if (score === 1) {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "You lost!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  guessNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing again!";
  document.querySelector(".number").textContent = guessNumber;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
