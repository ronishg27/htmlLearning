const play = document.querySelector("#play");
let botGuess = "";

const possibilites = ["Scissors", "Paper", "Rock"];

let winner;
function guess() {
  let randomNumber = Math.floor(Math.random() * 100) % 3;
  botGuess = possibilites[randomNumber];
  const userGuess = document.getElementById("Player").value;
  //   console.log(userGuess);
  //   console.log(botGuess);
  document.querySelector("#resBot").innerHTML = botGuess;
  //   document.querySelector("#resPlayer").innerHTML = userGuess;
  if (userGuess === botGuess) winner = "Draw";
  if (userGuess === "Scissors") {
    winner = botGuess === "Rock" ? "You" : "Bot";
    // if (botGuess === "Rock") {
    //   winner = "You won!";
    // }
    // if (botGuess === "Paper ") {
    //   winner = "You lose, Bot won!";
    // }
  }
  if (userGuess === "Paper") {
    if (botGuess === "Rock") {
      winner = "You won!";
    }
    if (botGuess === "Scissors") {
      winner = "You lose, Bot won!";
    }
  }
  if (userGuess === "Rock") {
    if (botGuess === "Scissors") {
      winner = "You won!";
    }
    if (botGuess === "Paper") {
      winner = "You lose, Bot won!";
    }
  }

  document.querySelector("#winner").textContent = winner;
}
