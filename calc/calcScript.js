const btnBoard = document.querySelector(".button-container");
const elementButtons = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "+",
  "-",
  0,
  "x",
  "/",
  "=",
  "AC",
];
function createButtonElement() {
  elementButtons.forEach((value, index) => {
    const button = document.createElement("button");
    button.classList.add("number-button");
    button.textContent = value;
    button.id = index;
    btnBoard.appendChild(button);
    button.addEventListener("click", (e) => {
      const displayElement = document.querySelector("#display");

      if (e.target.textContent === "=") {
        // code for operations
        const expression = document.querySelector("#display").innerHTML;
        // console.log(expression);
        const result = calculate(expression);
        displayElement.innerHTML = result;
        return;
      }
      if (e.target.textContent === "AC") {
        document.querySelector("#display").innerHTML = "";
        return;
      }
      document.querySelector("#display").innerHTML += e.target.textContent;
    });
  });
}

function calculate(expression) {
  try {
    // Use JavaScript's eval() function to evaluate the expression
    expression = expression.replace(/x/g, "*");
    const result = eval(expression);
    return result;
  } catch (error) {
    // Handle errors, such as invalid expressions
    return "Error";
  }
}

createButtonElement();
