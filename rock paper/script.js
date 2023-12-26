let choices = document.querySelectorAll(".choice");
let userChoice;
let userNewScore=0;
let compNewScore=0;
let myScore = document.getElementById("myScore");
let compScore = document.getElementById("compScore");
let winLosePara=document.getElementById('win-lose')

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const GenCompChoice = () => {
  const choices = ["paper", "scissors", "rock"];
  let randIndx = Math.floor(Math.random() * 3);
  return choices[randIndx];
};

const drawGame = (userChoice,compChoice) => {
    // console.log("Game Draw")
    winLosePara.innerText=(`Game Draw  you choose ${userChoice} && computer choose ${compChoice}`);
    winLosePara.style.backgroundColor="yellow"
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    winLosePara.innerText=(`You win you choose ${userChoice} && computer choose ${compChoice}`);
    winLosePara.style.backgroundColor="green"
    // console.log("user win", userChoice, compChoice);
    myScore.innerText =++userNewScore 
  } else {
    winLosePara.innerText=(`You Lose you choose ${userChoice} && computer choose ${compChoice}`);
    winLosePara.style.backgroundColor="red"
    // console.log("user lose", userChoice, compChoice);
    compScore.innerText =++compNewScore
  }
};

const playGame = (userChoice) => {
  const compChoice = GenCompChoice();
//   console.log("user Choice", userChoice);
//   console.log("comp Choice", compChoice);
  if (userChoice === compChoice) {
    drawGame(userChoice,compChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
