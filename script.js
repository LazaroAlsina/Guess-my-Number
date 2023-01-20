"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "❤ Correct number!";

document.querySelector(".number").textContent = 15;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 25;
*/

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
});
