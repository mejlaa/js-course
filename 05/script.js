"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 28;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = mesage;
};

document.querySelector(".check").addEventListener("click", function () {
  //convert string to a number, without Number type of guess is always string
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    //when there is no input
    // document.querySelector(".message").textContent = "⛔️ No number!";
    displayMessage("⛔️ No number!");

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct number!";
    displayMessage("🎉 Correct number!");
    document.querySelector(".number").textContent = secretNumber;

    //changing CSS style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector(".message").textContent =
        //   guess > secretNumber ? "📈 Too high!" : "📉 To low!";
        displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 To low!");
        score--;
        //for displaying score in browser
        document.querySelector(".score").textContent = score;
      } else {
        // document.querySelector(".message").textContent =
        //   "💥 You lost the game!";
        displayMessage("💥 You lost the game!");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

//     //when guess is to high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high!";
//       score--;
//       //for displaying score in browser
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥 You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }

//     //when guess is to high
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 To low!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥 You lost the game!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
