const boxes = document.querySelectorAll(".box");
const resPara = document.getElementById("res-para");
const resetBtn = document.getElementById("reset-btn");
let turnX = true;
let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "0";
      turnX = true;
    }
    count++;
    let isWinner=checkWinner()
    if (count === 9 && !isWinner) {
        drawGame();
      }
  });
});

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const drawGame=()=>{
    resPara.innerText=`Game is Draw`
    resPara.style.backgroundColor = "yellow";
    resPara.style.color = "black";
    disableAllButtons();
}

const disableAllButtons = () => {
  for (let button of boxes) {
    button.setAttribute("disabled", true);
  }
};

const enableAllButtons = () => {
  for (let button of boxes) {
    button.setAttribute("disabled", false);
    button.innerText = "";
  }
};

function resetGame() {
  // turnX=true;
  // enableAllButtons();
  window.location.reload(true);
}

const showWinner = (user) => {
  resPara.innerText = `${user} won the game`;
  resPara.style.backgroundColor = "green";
  console.log(`winner is ${user}`);
  disableAllButtons();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let post1val = boxes[pattern[0]].innerText;
    let post2val = boxes[pattern[1]].innerText;
    let post3val = boxes[pattern[2]].innerText;
    console.log(post1val, post2val, post3val);

    if (post1val !== "" && post2val !== "" && post3val != "") {
      if (post1val === post2val && post2val === post3val) {
        showWinner(post1val);
        return true;
      }
    }
  }
  return false;
};

resetBtn.addEventListener("click", resetGame);
