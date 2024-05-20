const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const char = ["%", "*", "/", "+", "-", "="];
let result = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && result !== "") {
    result = eval(result.replace("%", "/100"));
  } else if (btnValue === "AC") {
    result = "";
  } else if (btnValue === "DEL") {
    result = result.toString().slice(0, -1);
  } else {
    if (result === "" && char.includes(btnValue)) return;
    result += btnValue;
  }
  display.value = result;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
